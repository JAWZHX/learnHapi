const Hapi = require('hapi')

const server = new Hapi.Server({
    host: 'localhost',
    port: 8080
})


async function startServer() {
    try {
        await server.register([
            {
                plugin: require('./base-route')
            }
        ])
        await server.start()
    } catch(err) {
        console.log('error', err)
    }
    console.log('info', `服务器运行在${server.info.uri}`)
}

startServer()