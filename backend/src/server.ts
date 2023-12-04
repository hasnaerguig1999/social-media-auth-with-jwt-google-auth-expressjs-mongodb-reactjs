import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/mongoose-connection";
import router from "./router/IndexRoutes";
import cors from "cors"

dotenv.config();

const app = express();


// Connect to MongoDB
connectToDatabase();
app.use(express.json({limit: '50mb'}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
