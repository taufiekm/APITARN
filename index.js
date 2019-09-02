const express = require('express')
const bodyParser = require('body-parser')

require('express-group-routes')

const app = express()

app.use(bodyParser.json())
const port =process.env.PORT || 3000

const TransactionController = require('./controller/TransactionController')
const OrderController = require('./controller/OrderController')
const MenuController = require('./controller/MenuController')
const CategoryController = require('./controller/CategoryController')

app.group('/api/v1', (router)=>{

    //transaction
    router.post('/transaction', TransactionController.store)
    router.get('/transactions', TransactionController.index)
    // router.post('/transactions/:id', TransactionController.update)

    //order
    // router.post('/order', OrderController.store)
    router.get('/orders', OrderController.index)
    router.get('/order/:id', OrderController.show)

    // menu
    router.get('/menu', MenuController.index)
    
    // category
    router.get('/category', CategoryController.index)
})

app.listen(port,()=>console.log('status online'))