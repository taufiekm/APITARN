const models = require('../models')
const Menu = models.menus


exports.index = async (req, res)=>{
    try{
        const menu = await Menu.findAll({
            
        })
        res.status(200).send(menu);
    }catch (err){
        console.log(err);
    }
}