require("dotenv").config();
import { App } from "./app";
import { Database } from "./model/index";

const start = new App();
const PORT = process.env.PORT || 5024;
const mongoURL = process.env.MONGO_URI || "";

const database = new Database(mongoURL);

database.connect().then(() => {
  start.app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
