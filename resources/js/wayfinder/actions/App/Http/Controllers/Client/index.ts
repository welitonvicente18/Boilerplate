import Auth from './Auth'
import DashboardController from './DashboardController'

const Client = {
    Auth: Object.assign(Auth, Auth),
    DashboardController: Object.assign(DashboardController, DashboardController),
}

export default Client