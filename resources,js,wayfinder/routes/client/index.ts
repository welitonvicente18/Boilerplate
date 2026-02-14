import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Client\Auth\LoginController::login
* @see app/Http/Controllers/Client/Auth/LoginController.php:11
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
* @see app/Http/Controllers/Client/Auth/LoginController.php:11
* @route '/client'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Client\Auth\LoginController::login
* @see app/Http/Controllers/Client/Auth/LoginController.php:11
* @route '/client'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Client\Auth\LoginController::login
* @see app/Http/Controllers/Client/Auth/LoginController.php:11
* @route '/client'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Client\DashboardController::__invoke
* @see app/Http/Controllers/Client/DashboardController.php:14
* @route '/client/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/client/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Client\DashboardController::__invoke
* @see app/Http/Controllers/Client/DashboardController.php:14
* @route '/client/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Client\DashboardController::__invoke
* @see app/Http/Controllers/Client/DashboardController.php:14
* @route '/client/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Client\DashboardController::__invoke
* @see app/Http/Controllers/Client/DashboardController.php:14
* @route '/client/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

const client = {
    login: Object.assign(login, login),
    dashboard: Object.assign(dashboard, dashboard),
}

export default client