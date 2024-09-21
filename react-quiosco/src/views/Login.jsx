import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <>

      <h1 className="text-4xl font-black">Iniciar Sesion</h1>
      <p>Para crear un pedido debes iniciar sesion</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-55 py-10">

        <form action="">


          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-slate-800"
            >
              Email:
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu Email"
              className="mt-2 w-full p-3 bg-gray-50"
              value=""
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-slate-800"
            >
              Password:
            </label>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Tu Password"
              className="mt-2 w-full p-3 bg-gray-50"
              value=""
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesion"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />

        </form>

      </div>

      <nav className="mt-5">
        <Link to="/auth/registro">
          No tienes cuenta?, Crea Una
        </Link>
      </nav>

    </>
  )
}