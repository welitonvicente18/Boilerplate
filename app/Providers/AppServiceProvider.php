<?php

namespace App\Providers;

use Faker\Factory;
use Faker\Generator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Habilita erros no mode de desenvolvimento
        Model::shouldBeStrict(!$this->app->isProduction());

        // Não deixa executar comendas destrutivos no DB
        DB::prohibitDestructivecommands($this->app->isProduction());

        // Forçar o vite
        Vite::useAggressivePrefetching();

        //força o HTTP
        URL::forceHttps($this->app->isProduction());

        // padrão de senha no min 12 max 255 e que não seja comprometida
        Password::defaults(fn (): ?Password => app()->isProduction() ? Password::min(12)->max(255)->uncompromised() : null);
    }
}
