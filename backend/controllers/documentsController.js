import { documentModel } from "../models/DocumentModels.js";

const allDocs = async (req, res) => {
  try {
    const response = documentModel.find({});
    res.status(200).json(response);
  } catch (err) {
    res.json(err)
  }
};

const newDoc = async () => {};

const specDoc = async () => {};

export { allDocs, newDoc, specDoc };
