const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

// mongoose.connect(
//   "mongodb://dbUser:dbUser@ac-zcx3rpl-shard-00-00.ltxiedh.mongodb.net:27017,ac-zcx3rpl-shard-00-01.ltxiedh.mongodb.net:27017,ac-zcx3rpl-shard-00-02.ltxiedh.mongodb.net:27017/?ssl=true&replicaSet=atlas-nujjw6-shard-0&authSource=admin&retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: "courses",
//   }
// );

app.listen(3000, () => console.log("Server is running on port 3001"))

// Dockerize 
// Aws Deployment 
// Volumes and Networks