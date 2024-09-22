import { useQuiosco } from '../hooks';
import { Categoria } from './';

export const Sidebar = () => {

  const { categorias } = useQuiosco();

  return (
    <aside className="md:w-72">

      <div className="p-4">
        <img
          src="img/logo.svg"
          alt="Logo FreshCoffe"
          className="w-40"
        />
      </div>

      <div className="mt-10">
        { categorias.map( (categoria) => (
          <Categoria
            categoria={categoria}
            key={categoria.id}
          />
        )) }
      </div>

      <div className="my-5 px-5">
        <button
          type='button'
          className='text-center bg-red-500 hover:bg-red-700 w-full p-3 font-bold text-white truncate'
        >
          Cancelar Orden
        </button>
      </div>

    </aside>
  )
}
