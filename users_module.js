//Step 1: Database connection
const mongoose = require("mongoose");
//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str = "mongodb://nayan786:nayan786@cluster0-shard-00-00.vmfsx.mongodb.net:27017,cluster0-shard-00-01.vmfsx.mongodb.net:27017,cluster0-shard-00-02.vmfsx.mongodb.net:27017/tcet2022app2?ssl=true&replicaSet=atlas-b8izkz-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected successfully..."))
    .catch((error) => console.log(error));
//Step 2: Create Schema (Java Class)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
})
//Step 3: Create collection Object (model)
// MAPPING
const userObject = new mongoose.model("help", userSchema);
exports.User = userObject;