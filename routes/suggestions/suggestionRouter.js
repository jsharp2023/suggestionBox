//Hook it up to `suggestionRouter.js`
const express = require('express')
const router = express.Router()
const suggestionController = require("../../controller/suggestionController")

// - `GET /all-suggestions`
router.get('/all-suggestion', suggestionController.getAllSuggestions)
 // - `GET /single-suggestion`
router.get('/single-suggestion/:id', suggestionController.getSingleSuggestion)
//    - `POST /create-suggestion`
router.post('/create-suggestion', suggestionController.createSuggestion)
//    - `UPDATE /update-suggestion`
router.put('/update-suggestion/:id', suggestionController.updateSuggestion)
//    - `DELETE /delete-suggestion`
router.delete('/delete-suggestion/:id', suggestionController.deleteSuggestion)
// `GET /by-author-suggestion` using query - `getSuggestionsByAuthor`



module.exports = router;