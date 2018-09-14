module.exports = {
    reporters: {
        // 配置控制台日志
        consoleReporter: [
            {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{log: '*', response: '*'}]
            },
            {
                module: 'good-console',
            },
            'stdout'
        ],
        // 配置ops文件日志
        opsFileReporter: [
            {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{ops: '*'}]
            },
            {
                module: 'good-squeeze',
                name: 'SafeJson',
                args: [
                    null,
                    {separator: '\n#########\n', space: 2}
                ]
            },
            {
                module: 'rotating-file-stream',
                args: ['ops_log.json', {size: '10M', path: './opsLogs', compress: true, interval: '1d'}]
            }
        ],
        // 配置error文件日志
        errorFileReporter: [
            {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{error: '*'}]
            },
            {
                module: 'good-squeeze',
                name: 'SafeJson',
                args: [
                    null,
                    {separator: `\n#########\n`, space: 2}
                ]
            },
            {
                module: 'rotating-file-stream',
                args: ['error_log.json', {size: '10M', path: './errorLogs', compress: true, interval: '1d'}]
            }
        ],
        // 配置request文件日志
        requestFileReporter: [
            {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{request: '*'}]
            },
            {
                module: 'good-squeeze',
                name: 'SafeJson',
                args: [
                    null,
                    {separator: `\n#########\n`, space: 2}
                ]
            },
            {
                module: 'rotating-file-stream',
                args: ['request_log.json', {size: '10M', path: './requestLogs', compress: true, interval: '1d'}]
            }
        ],
        // 配置response文件日志
        responseFileReporter: [
            {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{response: '*'}]
            },
            {
                module: 'good-squeeze',
                name: 'SafeJson',
                args: [
                    null,
                    {separator: `\n#########\n`, space: 2}
                ]
            },
            {
                module: 'rotating-file-stream',
                args: ['response_log.json', {size: '10M', path: './responseLogs', compress: true, interval: '1d'}]
            }
        ],
        // 配置log文件日志
        logFileReporter: [
            {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{log: '*'}]
            },
            {
                module: 'good-squeeze',
                name: 'SafeJson',
                args: [
                    null,
                    {separator: `\n#########\n`, space: 2}
                ]
            },
            {
                module: 'rotating-file-stream',
                args: ['log_log.json', {size: '10M', path: './logLogs', compress: true, interval: '1d'}]
            }
        ],
    }
}