const mongoose = require("mongoose");
const goNodeMongo = require("go-node-mongo");

require("dotenv").config();

const app = goNodeMongo(process.env.MONGO_SRV, mongoose);
const { NotesRouter } = require("./routes/notes.js");
app.use("/api/v1", NotesRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running on Port Number ", process.env.port);
});
