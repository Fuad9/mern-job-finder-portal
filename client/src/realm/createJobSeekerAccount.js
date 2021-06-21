exports = function (payload, response) {
  var jobseekers = {};
  var result = {};

  if (payload.body) {
    jobseekers = EJSON.parse(payload.body.text());
    const date = new Date();

    console.log("parsed payload body", JSON.stringify(jobseekers));

    const collection = context.services
      .get("mongodb-atlas")
      .db("jobsDB")
      .collection("jobseekers");

    return collection.insertOne(jobseekers);
  }
  return result;
};
