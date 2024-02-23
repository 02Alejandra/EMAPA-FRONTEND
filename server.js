// const express = require('express');
// const req = require('express/lib/request');
// // const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();
// const cors = require('cors');

// //midaleware
// app.use(cors({
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   // allowedHeaders: ['Content-Type', 'Authorization']
// }));


// // app.use((req, res, next) => {
// //   res.header('Access-Control-Allow-Origin', 'http://186.42.112.70:8094');
// //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// //   next();
// // });

// app.options('*', (req, res) => {
//   res.send();
// });

// // app.use(
// //   '/principal.asmx',
// //   createProxyMiddleware({
// //     target: 'http://186.42.112.70:8094',
// //     changeOrigin: true,
// //   })
// // );

// // const port = 8081;
// app.listen(port, () => {
//   console.log(`Servidor escuchando en: http://localhost:${port}`);
// });

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

// Crea una aplicación Express
const app = express();

// Habilita CORS para todas las rutas
app.use(cors());

// Configura el proxy middleware
const proxy = createProxyMiddleware({
  target: 'http://186.42.112.70:8094', // URL del servidor de backend
  changeOrigin: true, // Necesario para sitios virtuales alojados
  pathRewrite: {
    '^/api': '', // Reescribe la ruta de acceso al eliminar /api
  },
  onProxyReq: (proxyReq, req, res) => {
    // Puedes modificar las solicitudes al servidor de destino aquí si es necesario
  },
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).send('Proxy Error');
  },
});

// Usa el proxy para rutas específicas
app.use('/api', proxy);

// El servidor escucha en el puerto 3000
app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
});
