const express = require('express')
const router = express.Router()
const suggestionController = require("../../controller/suggestionController")

router.get('/all-suggestion', suggestionController.getAllSuggestions)

module.exports = router;