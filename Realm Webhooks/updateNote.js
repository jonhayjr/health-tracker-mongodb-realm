exports = async function(payload, response) {
    const id = payload.query.Id;
    let query = {"_id": BSON.ObjectId(id)};
    const body = JSON.parse(payload.body.text())
    const update = {
  "$set": {
    "date": new Date(body.date) || '',
    "diet": body.diet || '',
    "mood": body.mood || '',
    "symptoms": body.symptoms || '',
    "exercise": body.exercise || ''
  }
};
// Return the updated document instead of the original document
    const options = { returnNewDocument: true };

    const collection = context.services.get("mongodb-atlas").db("health-db").collection("notes");
    return collection.findOneAndUpdate(query, update, options)
  .then(updatedDocument => {
    if(updatedDocument) {
      console.log(`Successfully updated document: ${updatedDocument}.`)
    } else {
      console.log("No document matches the provided query.")
    }
    return updatedDocument
  })
  .catch(err => console.error(`Failed to find and update document: ${err}`))
};