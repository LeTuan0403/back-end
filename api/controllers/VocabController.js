// Import vocab model from Mongoose
const vocabModel = require('../models/VocabModel')

// Controller to get all vocab items from database
const viewAllVocabs = async (req, res) => {
    try {
        // Fetch all vocabs and sort them in descending order by _id (latest first)
        const vocabs = await vocabModel.find({}).sort({ _id : -1 })
        res.status(200).json(vocabs) // Return vocabs as JSON with status 200
    } catch (err) {
        // Handle any error during fetch
        res.send(err)
    }
}

// Controller to get a single vocab item by its ID
const viewVocabById = async (req, res) => {
    try {
        // Find vocab by ID from request parameters
        const vocabs = await vocabModel.findById(req.params.id);
        res.status(200).json(vocabs) // Return found vocab
    } catch (err) {
        // Handle error if fetch fails
        res.send(err)
    }
}

// Controller to add a new vocab item to the database
const addNewVocab = async (req, res) => {
    try {
        // Create a new vocab document using request body
        const vocabs = await vocabModel.create(req.body).sort({_id : -1})
        // Respond with created vocab and success message
        res.status(201).json({vocabs, message : 'Add vocab succeed !'})
    } catch (err) {
        // Handle creation error
        res.send(err)
    }
}
// Controller to update an existing vocab item by ID
const editVocab = async (req, res) => {
    try {
        // Find vocab by ID and update it with new data from request body
        const vocabs = await vocabModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // Respond with updated vocab and success message
        res.status(200).json({vocabs, message : 'Edit vocab succeed !'});
    } catch (err) {
        // Handle update error
        res.send(err)
    }
}
// Controller to delete a single vocab item by its ID
const deleteVocab = async (req, res) => {
    try {
        // Find vocab by ID and delete it
        const vocabs = await vocabModel.findByIdAndDelete(req.params.id)
        // Respond with deleted vocab and confirmation message
        res.json({vocabs, message: "Delete succeed!"})
    } catch (err) {
        // Handle deletion error
        res.send(err)
    }
}
// Controller to delete all vocab items from the database
const deleteAllVocabs = async (req, res) => {
    try {
        // Delete all vocab documents
        const vocabs = await vocabModel.deleteMany();
        // Respond with result and success message
        res.json({vocabs, message: 'All vocabs deleted!' });
    } catch (err) {
        // Handle error during mass deletion
        res.send(err)
    }
}

// Export all controllers as module functions
module.exports ={
    viewAllVocabs,
    viewVocabById,
    addNewVocab,
    editVocab,
    deleteAllVocabs,
    deleteVocab,
}
