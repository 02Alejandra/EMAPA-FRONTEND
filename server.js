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
