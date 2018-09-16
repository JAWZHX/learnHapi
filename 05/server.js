const Hapi = require('hapi')
const Inert = require('inert')
const Path = require('path')

const server = new Hapi.Server({
    host: 'localhost',
    port: 8080,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
})

async function startServer() {
    try {
        await server.register([
            {
                plugin: Inert
            }
        ])

        server.route([
            {
                method: 'GET',
                path: '/{param*}',
                handler: {
                    directory: {
                        path: '.',
                        redirectToSlash: true,
                        index: true
                    }
                }
            }
        ])

        await server.start()
    } catch(err) {
        console.log(err);
    }
    console.log(`服务器运行在${server.info.uri}`);
}

startServer()