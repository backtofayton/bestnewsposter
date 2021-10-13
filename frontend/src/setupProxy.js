const { createProxyMiddleware } = require('http-proxy-middleware');

let server;
if (process.env.NODE_ENV == 'development') { server = process.env.REACT_APP_LOCALHOST_PROXY; }
else if (process.env.NODE_ENV == 'production') {
    server = process.env.REACT_APP_PRODUCTION_PROXY
}
console.log('proxy server= ', server, '\nenv= ', process.env.NODE_ENV)

const secure = false;
// const server = 'http://127.0.0.1:8000'
module.exports = function (app) {
    app.use(createProxyMiddleware('/api/users',
        {
            // secure: secure,
            target: server,
            // prependPath: false, 
            logLevel: 'debug'
        }
    ));
    app.use(createProxyMiddleware('/api/data',
        {
            // secure: secure,
            target: server,
            // prependPath: false, 
            logLevel: 'debug'
        }
    ));
};