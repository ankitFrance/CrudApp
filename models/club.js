const mongoose = require ('mongoose');
const schema = mongoose.Schema;
let clubScheema= new schema({
    name: {
        type:String
    },
    email: {
        type: String
    }
})

module.exports=  mongoose.model('student', clubScheema)