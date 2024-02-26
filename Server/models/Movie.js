const mongoose= require("mongoose");
// in home there is one {big image} which is {img} second is {title image joker} which is {image title} and last one in {thumnail images} below the continue to watch so that were a {imgsmll}
const MovieSchema = new mongoose.Schema({
    title:{type:String , required:true , unique:true},
    desc:{type:String},
    img:{type:String},
    imgTitle:{type:String},
    imgSm:{type:String},
    trailer:{type:String},
    video:{type:String},
    year:{type:String},
    limit:{type:Number},
    genre:{type:String},
    isSeries:{type:Boolean,default:false}
 },
{timestamps:true}
);

module.exports = mongoose.model("Movie",MovieSchema)