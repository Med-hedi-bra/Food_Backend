
const fs = require("fs");
const Recipes = require("../model/recipes");


exports.get_Recipes = (req, res) => {
  Recipes.find()
  .then(thing=>res.status(200).json(thing))
  .catch(err=> res.status(410).json({msg:err}))
 
};
 
exports.createRecipes = (req, res) => {
  const object = req.body
  let newRecipes = new Recipes({
    ...object
  });
  console.log(newRecipes)
  newRecipes
    .save()
    .then(() => {
      res.status(200).json({ message: "le recipient est bien créer" })
    })
    .catch((err)=>{
      res.status(401).json({ message: err })
      console.log(err)
    })
};



// exports.modifyEtatAction = (req,res)=>{
//   Recipes.updateOne({id:1} ,
//      {
      
//       port1: req.body.port1,
//       port2:  req.body.port2,
//       port3:  req.body.port3,
//       climatiseur :  req.body.climatiseur,
//       chauffage :  req.body.chauffage,
//       lumiere :  req.body.lumiere 
//     })
//   .then(()=>res.status(201).json({message:`l'etat est bien modifié`}))
//   .catch(()=>res.status(404).json({mesa:err}))
// }

// exports.modifyEtat = (req,res)=>{
//   Recipes.updateOne({id:1} ,
//      {
//     temperature: req.body.temperature,
//     humidité : req.body.humidité
//     })
//   .then(()=>res.status(201).json({message:`l'etat est bien modifié`}))
//   .catch(()=>res.status(404).json({mesa:err}))
// }

// exports.modifyEtat = (req,res)=>{
//   Recipes.updateOne({id:1} ,
//      {
//     temperature: req.body.temperature,
//     humidité : req.body.humidité
//     })
//   .then(()=>res.status(201).json({message:`l'etat est bien modifié`}))
//   .catch(()=>res.status(404).json({mesa:err}))
// }

