<div class="p-10">
    <div class="mb-5">
        <h3 class="font-bold text-3xl text-gray-800 my-3">
            {{ $vacante->titulo }}
        </h3>

        <div class="md:grid md:grid-cols-2 bg-gray-50 p-4 my-10">

            <p class="font-bold text-sm uppercase text-gray-800 my-3">
                Empresa: 
                <span class="font-normal normal-case">{{ $vacante->empresa }}</span>
            </p>

            <p class="font-bold text-sm uppercase text-gray-800 my-3">
                Ultimo dia para postularse: 
                <span class="font-normal normal-case">{{ $vacante->ultimo_dia->toFormattedDateString() }}</span>
            </p>

            <p class="font-bold text-sm uppercase text-gray-800 my-3">
                Categoria: 
                <span class="font-normal normal-case">{{ $vacante->categoria->categoria }}</span>
            </p>

            <p class="font-bold text-sm uppercase text-gray-800 my-3">
                Salario: 
                <span class="font-normal normal-case">{{ $vacante->salario->salario }}</span>
            </p>

        </div>

    </div>

    <div class="">
        <div class="">

        </div>

        <div class="">
            <h2></h2>
        </div>
    </div>


</div>
