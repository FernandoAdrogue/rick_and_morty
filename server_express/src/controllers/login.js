const usersList = require("../utils/users")

const userLogin  = (req,res)=>{
    const {email, password} = req.query
    const login= {
        access : true && !!usersList
            .filter(user=>user.email === email)
            .filter(trylog=>trylog.password === password).length
    }
    res.json(login)
}
module.exports = userLogin