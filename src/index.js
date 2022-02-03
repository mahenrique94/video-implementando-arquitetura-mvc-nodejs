const express = require('express')
const path = require('path')

// Controladores'
const ProductController = require('./controllers/ProductController')
const HomeController = require('./controllers/HomeController')

// Configurações do serviço
const app = express()
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.urlencoded())

// Rotas
app.get('/', HomeController.home)
app.get('/products', ProductController.list)
app.get('/products/form', ProductController.form)
app.post('/products/create', ProductController.create)

// Executar o serviço
app.listen(8080, () => {
  console.log('Serviço executando em http://localhost:8080')
  console.log('Para parar o serviço aperte CTRL+C')
})
