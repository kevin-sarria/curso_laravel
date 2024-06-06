<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class ImagenController extends Controller
{

    public function store(Request $request)
    {
        $manager = new ImageManager(new Driver());

        $imagen = $request->file('file');

        $nombreImagen = Str::uuid() . "." . $imagen->extension();

        $imagenServidor = $manager->read($imagen);
        $imagenServidor->resizeDown(1000, 1000);

        $imagenPath = public_path('uploads') . '/' . $nombreImagen;

        $imagenServidor->save($imagenPath);

        return response()->json([ 'imagen' => $nombreImagen ]);
    }
}