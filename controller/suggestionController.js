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

//    - `createSuggestion` - does not need id or time from the user

//    - `updateSuggestion` - the user can only update title and suggestion

//    - `deleteSuggestion` - suggestion deletes based on id


module.exports = {getAllSuggestions}