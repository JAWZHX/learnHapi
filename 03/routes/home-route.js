module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return 'Home Route'
        }
    },
    {
        method: 'GET',
        path: '/home',
        handler: (req, h) => {
            return 'Path /home'
        }
    }
]