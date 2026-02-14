<?php

use Illuminate\Support\Facades\Route;

Route::get('/teste', function () {
   return \Inertia\Inertia::render('Teste', []);
});

Route::get('/', function () {
    return view('welcome');
});

require_once 'admin.php';
require_once 'client.php';
require_once 'public.php';
