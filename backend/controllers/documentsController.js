import { documentModel } from "../models/DocumentModels.js";

const allDocs = async (req, res) => {
  try {
    const response = await documentModel.find({});
    res.status(200).json(response);
  } catch (err) {
    res.json(err)
  }
};

const newDoc = async (req,res) => {
  const doc = new documentModel(req.body)
  try{
    // const {name,description,imageUrl,content,docOwner} = req.body
    const response = await doc.save()
    res.status(200).json(response)
  }catch(err){
    console.error(err)
    res.status(300).json(err)
  }
};

const specDoc = async () => {};

export { allDocs, newDoc, specDoc };
