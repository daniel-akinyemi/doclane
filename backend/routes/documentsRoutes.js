import express from 'express'

const documentsRouter = express.Router()

documentsRouter.get('/',allDocs)
documentsRouter.post('/',newDoc)
documentsRouter.post(':id',specDoc)

export default documentsRouter