const Hapi = require('hapi')
const options = require('./log')
const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
})

server.route([
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return "Hello Hapi"
        }
    }
])

async function startServer() {
    try{
        // 注册插件
        await server.register([
            {
                plugin: require('good'),
                options
            }
        ])
        // 开启服务器
        await server.start()
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
    server.log('info', `服务器运行在：${server.info.uri}`)
}

// 开启服务
startServer()