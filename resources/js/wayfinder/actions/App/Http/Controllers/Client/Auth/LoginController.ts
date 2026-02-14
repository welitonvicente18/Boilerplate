import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Client\Auth\LoginController::login
* @see app/Http/Controllers/Client/Auth/LoginController.php:10
* @route '/client'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/client',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Client\Auth\LoginController::login
* @see app/Http/Controllers/Client/Auth/LoginController.php:10
* @route '/client'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Client\Auth\LoginController::login
* @see app/Http/Controllers/Client/Auth/LoginController.php:10
* @route '/client'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Client\Auth\LoginController::login
* @see app/Http/Controllers/Client/Auth/LoginController.php:10
* @route '/client'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

const LoginController = { login }

export default LoginController