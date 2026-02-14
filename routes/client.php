<?php

use App\Http\Controllers\Client\Auth\LoginController;
use App\Http\Controllers\Client\DashboardController;
use Illuminate\Support\Facades\Route;

Route::group(['as' => 'client.', 'prefix' => 'client'], function () {
    Route::get('/', [LoginController::class, 'login'])->name('login');

    Route::group(['middleware' => ['auth']], function () {
        Route::get('/dashboard', DashboardController::class)->name('dashboard');
    });

});
