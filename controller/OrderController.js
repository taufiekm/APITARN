const models = require('../models')
const Order = models.orders
const Menu = models.menus
const Transaction = models.transaction

exports.store = async (req, res) =>{

    try{
        const order = await Order.create({
            menuId:req.menuId
        })

        req.send({
            status:true,
            message:'order success',
            data: order
        })
    }catch (err) {
        console.log(err);
      }
}
exports.show = (req, res) => {
    const id = req.params.id

    Order.findOne({ where: { id } })
        .then(order => {
            if (order) {
                return res.status(200).send(order)
            } else {
                return res.status(400).send({ message: 'order not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}


exports.index = async (req, res)=> {
    try{
        const orders = await Order.findAll({
            include:[
                {
                    model:Menu
                }
            ],
         
        })
        res.status(200).send(orders);
    }catch(err){
        console.log(err);
    }
}
// exports.index = (req, res) => {
//     Order.findAll()
//         .then(order => res.status(200).send(order))
//         .catch(err => res.status(400).send(err))
// }