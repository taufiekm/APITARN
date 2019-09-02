const models = require('../models')
const Transaction = models.transactions
const Menu = models.menus
const Order = models.orders


exports.index = async (req, res) =>{
   try{
     const transactions= await Transaction.findAll({

     })
     res.status(200).send(transactions);
   }catch(err){
     console.log(err);
   }
}
exports.store = async (req, res) => {
    const {tableNumber}  = req.body;
  
    try {
      const transaction = await Transaction.create({
        tableNumber
      });
      res.send({
        transaction
      });
    } catch (err) {
      console.log(err);
    }
  };
  
//   exports.update = async (req,res) =>{
//       const {} =

//       try{
//           const transaction = await Transaction.update({

//           })
//       }
//   }