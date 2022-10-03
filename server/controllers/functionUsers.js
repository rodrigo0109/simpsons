const User = require('../models/User')

const createAuth0 = async (name, email) => {
    const [createdUser, created] = await User.findOrCreate({   // eslint-disable-line
        where: { email: email },
        defaults: {
            name: name,
            email: email,
        }
    })

    return { createdUser }
}

module.exports = {createAuth0}