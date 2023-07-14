import express from 'express'
import {allDocs,newDoc,specDoc} from '../controllers/documentsController.js'

const documentsRouter = express.Router()

documentsRouter.get('/',allDocs)
documentsRouter.post('/',newDoc)
documentsRouter.post(':id',specDoc)

export default documentsRouter