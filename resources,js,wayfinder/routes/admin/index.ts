import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import loginDf2c2a from './login'
/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:11
* @route '/admin'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:11
* @route '/admin'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:11
* @route '/admin'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\Auth\LoginController::login
* @see app/Http/Controllers/Admin/Auth/LoginController.php:11
* @route '/admin'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

const admin = {
    login: Object.assign(login, loginDf2c2a),
}

export default admin