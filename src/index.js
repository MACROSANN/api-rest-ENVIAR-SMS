import express from "express";
import Routers from "./routers/routes.js";

const app = express();
const PORTA = process.env.PORTA || 3000;

app.use(express.json());
app.use(Routers);

app.listen(PORTA, () => {
    console.log(`Servidor rondando em http://localhost:${PORTA}`);
});

