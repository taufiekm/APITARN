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

exports.show = (req, res) => {
    const id = req.params.id

    menu.findOne({ where: { id } })
        .then(menu => {
            if (menu) {
                return res.status(200).send(menu)
            } else {
                return res.status(400).send({ message: 'menu not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

