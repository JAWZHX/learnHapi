const Hapi = require('hapi')

// 创建一个服务器实例
const server = new Hapi.Server({
    host: 'localhost',
    port: 8080
})

// 添加一个路由
server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => {
        return 'Hello Hapi'
    }
})

// 启动服务器
async function startServer(){
    try {
        await server.start()
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`服务器运行在：${server.info.uri}`);
}

startServer()