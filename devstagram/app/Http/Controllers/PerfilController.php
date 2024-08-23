<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class PerfilController extends Controller
{
    public function index()
    {
        return view('perfil.index');
    }

    public function store( Request $request )
    {

        // Modificar el Request
        $request->request->add([ 'username' => Str::slug($request->username) ]);

        $request->validate([
            'username' => ['required', 'unique:users,username,'.auth()->user()->id, 'min:3', 'max:20', 'not_in:twitter,editar-perfil']
        ]);

        if( $request->imagen ) {
            $manager = new ImageManager(new Driver());

            $imagen = $request->file('imagen');

            $nombreImagen = Str::uuid() . "." . $imagen->extension();

            $imagenServidor = $manager->read($imagen);
            $imagenServidor->resizeDown(1000, 1000);

            $imagenPath = public_path('perfiles') . '/' . $nombreImagen;

            $imagenServidor->save($imagenPath);
        }

        // Guardar Cambios
        $usuario = User::find(auth()->user()->id);
        $usuario->username = $request->username;
        $usuario->imagen = $nombreImagen ?? auth()->user()->imagen ?? '';
        $usuario->save();

        // Redireccionar
        return redirect()->route('posts.index', $usuario->username);

    }

}
