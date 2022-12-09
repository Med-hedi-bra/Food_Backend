const mongoose = require("mongoose");

const recipesSchema = mongoose.Schema({
 // id:{type:Number , required:true},
  name: { type: String, required: true },
  imageUrl : {type : String , require : true} , 
  description: { type: String, required: true },
  ingredients: { type: String , required:true},
  direction: { type: String , required:true},
  catégorie : {type : String  , required: true},
  date_publish : {type : String , required:true},
  url : {type : String , required:true} 
 
  
});
module.exports = mongoose.model("recipes_Etat ", recipesSchema);
