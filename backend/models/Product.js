import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true ,
        maxlength : 60
    },
    des : {
        type : String,
        require : true ,
        maxlength : 200
    },
    img :{
        type : String,
        required :true
    },
    prices : {
        type : [Number],
        required : true
    },
    extraOptions : {

        type : [
            {text : {type: String}, price : {type : [Number] , required: true}
         }
        ]
    }

}, {timestamps : true})

export default mongoose.model("Product" , ProductSchema)