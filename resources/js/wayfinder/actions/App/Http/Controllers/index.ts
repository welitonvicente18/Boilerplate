import Admin from './Admin'
import Client from './Client'

const Controllers = {
    Admin: Object.assign(Admin, Admin),
    Client: Object.assign(Client, Client),
}

export default Controllers