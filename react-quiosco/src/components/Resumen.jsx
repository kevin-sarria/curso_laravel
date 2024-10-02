import { functions } from "../helpers";
import { useQuiosco } from "../hooks"
import { ResumenProducto } from "./";

export const Resumen = () => {

  const { pedido, total, handleSubmitNuevaOrden } = useQuiosco();

  const { formatearDinero } = functions;

  const comprobarPedido = () => {
    return pedido.length < 1;
  }

  const handleSubmit = e => {
    e.preventDefault();

    handleSubmitNuevaOrden();
  }

  return (
    <aside className="w-72 h-screen overflow-y-auto p-5">
      <h1 className="text-4xl font-black">Mi Pedido</h1>

      <p className="text-lg my-5">Aqui podras ver el resumen y totales de tu pedido</p>

      <div className="py-10">
        { pedido.length === 0 ? (
          <p className="text-center text-2xl">No hay elementos en tu pedido aun</p>
        )
        :
        pedido.map( (producto, index) => (<ResumenProducto key={index} producto={producto} />) )
         }
      </div>

      <p className="text-xl mt-10">
        Total:
        <span>{ formatearDinero(total) }</span>
      </p>

      <form
        className="w-full"
        onClick={handleSubmit}
      >

        <div className="mt-5">

          <input
            type="submit"
            className={` ${ comprobarPedido() ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-800" } px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
            value="Confirmar Pedido"
            disabled={ comprobarPedido() }
          />

        </div>

      </form>

    </aside>
  )
}
