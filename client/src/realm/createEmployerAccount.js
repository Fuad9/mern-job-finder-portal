exports = function (payload, response) {
  var employers = {};
  var result = {};

  if (payload.body) {
    employers = EJSON.parse(payload.body.text());
    const date = new Date();

    console.log("parsed payload body", JSON.stringify(employers));

    const collection = context.services
      .get("mongodb-atlas")
      .db("jobsDB")
      .collection("employers");

    return collection.insertOne(employers);
  }
  return result;
};
