var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var User = mongoose.model('User2',schema,'users2');

var user = new User({
    name: 'Mike Cervantes',
    email: 'mikecervantes@hotmail.com'
});

user.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0);
});

User.find({},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Consulta General");
    console.log(docs);
    process.exit(0);
});

User.update({name:"José Miguel Cervantes Jiménez"},{$set: {email:"jomicervantesji@ittepic.edu.mx"}},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Actualización");
    console.log(docs);
    process.exit(0);
});

User.findByIdAndRemove({_id:"5d14ee13a7dbf622a44bdbeb"},(error,docs)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
    process.exit(0);
});
