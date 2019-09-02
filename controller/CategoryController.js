const models = require('../models')
const Category = models.categories
const Menu = models.menus

exports.index = async (req, res) => {
    try {
        const categories = await Category.findAll({
            include: [
                {
                    model: Menu
                }
            ]
        })
        // .then(categories=>res.send(categories))
        res.status(200).send(categories);
    } catch (err) {
        console.log(err);
    }
}

exports.show = (req, res) => {
    const id = req.params.id

    Category.findAll({
        where: { id }, include: [{
            model: Menu,
            as: "menuList"
        }]
    })
        .then(Category => {
            if (Category) {
                return res.status(200).send(Category)
            } else {
                return res.status(400).send({ message: 'Category not found' })
            }
        })
        .catch(err => res.status(400).send(err))

}
