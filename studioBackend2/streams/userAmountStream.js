const mongoose = require('mongoose');
const UserModel = require('../Model/Users'); // Adjust the path accordingly
const { ChangeStream } = require('mongodb');

async function monitorUserAmountChanges() {
  try {
    const client = mongoose.connection.getClient();
    const db = client.db('photographers'); // Replace with your database name
    const collection = db.collection('users'); // Replace with your collection name

    const changeStream = collection.watch([
      {
        $match: {
          'fullDocument.amount': { $eq: 0 }
        }
      }
    ]);

    changeStream.on('change', async (change) => {
      console.log("Change detected:", change);

      if (change.operationType === 'update' || change.operationType === 'replace') {
        const documentId = change.documentKey._id;

        // Update the status to false if amount is 0
        await collection.updateOne(
          { _id: documentId },
          { $set: { status: false } }
        );
        console.log(`Document with _id: ${documentId} has been updated with status: false`);
      }
    });

  } catch (err) {
    console.error("Error occurred:", err);
  }
}

module.exports = monitorUserAmountChanges;
