const models = require('../models')
const Category = models.categories
const Menu = models.menus

exports.index = async (req, res)=>{
    try{
        const categories = await Category.findAll({
            include:[
                {
                    model:Menu
                }
            ]
        })
        // .then(categories=>res.send(categories))
        res.status(200).send(categories);
    }catch (err) {
        console.log(err);
      }
}