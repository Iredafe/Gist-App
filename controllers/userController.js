/*these codes are also connected to the router and
and calls the appropriate model and view 
The job of the contoller here is to accept input 
and convert these inputs into the apropriate commands
for model and view*/

const User = require('../models/User')

exports.login = function(){

}

exports.logout= function(){

}

exports.register= function(req, res){

    let user = new User(req.body)

user.register()
if(user.errors.length){

res.send(user.errors)

}else {
res.send("Congrats, there are no errors")
}
}
 
exports.home= function(req, res){
    res.render('home-guest')
}