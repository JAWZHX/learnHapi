const homeRoutes = require('./routes/home-route')
let routesArray = [...homeRoutes]

const baseRoutes = {
    name: 'base-routes',
    version: '1.0.0',
    register: (server, options) => {
        server.route(routesArray)
    }
}


module.exports = baseRoutes