<?php

use Illuminate\Support\Facades\Route;

Route::get('/teste', function () {
   return \Inertia\Inertia::render('Teste', []);
});

Route::get('/', function () {
    return view('welcome');
});
