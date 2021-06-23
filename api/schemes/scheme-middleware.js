const Schemes = require('./scheme-model')

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
 try{ 
   const scheme = await Schemes.getById(req.params.id)
  if(scheme) {
    req.scheme = scheme;
    next();
  }else{
    res.status(404).json({message:`scheme with scheme_id <actual id> not found`})

  }
}catch(err){
  res.status(500).json({message:`Error processing request`,error:err})
}
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
try{
  if(!req.body.scheme_name) {
    res.status(400).json({message:`invalid scheme_name`})
  }

} catch(err){
  res.status(500).json({message:`Error processing request`,error:err})
}
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
try{
  if(!req.body.instructions && req.body.step_number){
    res.status(400).json({message:`invalid step`})
  }

} catch(err){
res.status(500).json({message:`Error processing request`})
}
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
