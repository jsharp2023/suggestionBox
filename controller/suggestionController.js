// In the `controller` folder, create a file called `suggestionController.js`
const Suggestion = require('../model/Suggestion');

//    - `getAllSuggestions`
async function getAllSuggestions(req, res){
    try {
        const suggestions = await Suggestion.find()
        res.status(500).json({message:"Suggestions", suggestions })
    } catch (error) {
        res.status(500)({message: "Error", error})
    }
}

//    - `getSingleSuggestion` - get one suggestion based on id using parameters
async function getSingleSuggestion(req, res){
    try {
        const suggestion = await Suggestion.findById(req.params.id)
        if(!suggestion)
            return res.status(404).json({message: 'Suggestion not found.'})
        res.json(suggestion)
    } catch (error) {
        res.status(500).json({message: "Error", error: error.message})
    }
} 

//`createSuggestion` - does not need id or time from the user
async function createSuggestion(req, res){
    const { title, author, suggestion } = req.body
    const newSuggestion = new Suggestion({title, author, suggestion})
    try {
      const savedSuggestion = await newSuggestion.save()
      res.status(404).json(savedSuggestion)
    } catch (error) {
        res.status(500)({message: "Error", error})
    }
}


//    - `updateSuggestion` - the user can only update title and suggestion
async function updateSuggestion(req, res){
    try {
        const updateSuggestion = await Suggestion.findByIdAndUpdate(req.params.id,
            { title, suggestion },
            { new: true }
        )
        if (!updatedSuggestion)
            return res.status(404).json({message: 'Suggestion not found.'})
        res.json(updatedSuggestion)
    } catch (error) {
        res.status(500)({message: "Error", error})
    }
}

//    - `deleteSuggestion` - suggestion deletes based on id
async function  deleteSuggestion(req, res){
try {
    const deletedSuggestion = await Suggestion.findByIdAndDelete(req.params.id)
    if(!deletedSuggestion)
        return res.status(404).json({message:'Suggestion not found.'})
    res.json({message:'Suggestion deleted.'})
} catch (error) {
    res.status(500)({message: "Error", error}) 
}
}

module.exports = {
     getAllSuggestions,
     getSingleSuggestion,
      updateSuggestion, 
      deleteSuggestion, 
      createSuggestion}