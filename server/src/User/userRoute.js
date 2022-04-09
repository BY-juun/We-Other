module.exports = (app) => {
    const user = require('./userController')

    app.post('/api/user/sign-up', user.signUpUser)



};
