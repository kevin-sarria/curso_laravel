import { createContext, useEffect, useState } from 'react';
import { clienteAxios } from '../config';

import { toast } from 'react-toastify';

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [ categorias, setCategorias ] = useState([]);
    const [ categoriaActual, setCategoriaActual ] = useState({});
    const [ modal, setModal ] = useState(false);
    const [ producto, setProducto ] = useState(false);
    const [ pedido, setPedido ] = useState([]);
    const [ total, setTotal ] = useState(0);

    useEffect( () => {
        const nuevoTotal = pedido.reduce( ( total, producto ) => ( producto.precio * producto.cantidad ) + total, 0 );
        setTotal(nuevoTotal);
    }, [pedido]);

    const obtenerCategorias = async() => {
        try {
            const { data } = await clienteAxios('/api/categorias');
            setCategorias(data.data);
            setCategoriaActual(data.data[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        obtenerCategorias();
    }, [] );

    const handleClickCategoria = id => {
        const categoria = categorias.filter( categoria => categoria.id === id )[0];
        setCategoriaActual(categoria);
    }

    const handleClickModal = () => {
        setModal( prev => !prev );
    }

    const handleSetProducto = producto => {
        setProducto(producto);
    }

    const handleAgregarPedido = ({ categoria_id, ...producto }) => {
        if( pedido.some( pedidoState => pedidoState.id === producto.id ) ) {
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === producto.id ? producto : pedidoState );
            setPedido(pedidoActualizado);
            toast.success('Guardado Correctamente');
        } else {
            setPedido([ ...pedido, producto ]);
            toast.success('Agregado Correctamente');
        }
    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter( producto => producto.id === id )[0];
        setProducto(productoActualizar);
        handleClickModal();
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter( producto => producto.id !== id );
        setPedido(pedidoActualizado);
        toast.success('Eliminado del pedido');
    }


    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total
            }}
        >
            { children }
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider,
    QuioscoContext
}