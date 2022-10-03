const { Router } = require('express')
const router = Router()
const { createAuth0 } = require('../controllers/functionUsers')

router.post('/user', async (req, res) => {
    const { name, email } = req.body
    console.log('llega',name, email)
    if (!name || !email) {
        res.status(400).json({ message: 'un nombre o email es requerido' })
    } else {
        try {
            res.status(200).send(await createAuth0(name, email))
        } catch (error) {
            res.status(401).send({
                name: error.name,
                msg: error.message
            })
        }
    }
})

module.exports = router