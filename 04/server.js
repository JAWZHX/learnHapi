const Hapi = require('hapi')
const Vision = require('vision')
const Pug = require('pug')

const server = new Hapi.Server({
    host: 'localhost',
    port: 8080
})

server.route([
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            let data = {
                pageTitle: "欢迎使用Pug",
                youAreUsingPug: true
            }
            return h.view('index', data)
        }
    }
])

async function startServer() {
    try {
        await server.register([
            {
                plugin: Vision
            }
        ])

        server.views({
            engines: {
                pug: Pug
            },
            path: __dirname + '/views'
        })

        await server.start()
    } catch (err) {
        console.log(err);
    }
    console.log(`服务器运行在：${server.info.uri}`);
}

startServer()