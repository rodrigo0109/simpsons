
const {app} = require('./app')
const { sequelize } = require('./db/db')


app.listen(3001, () => {
    console.log(`Server On Port  ${3001} `)
    sequelize.sync({force: true})
});