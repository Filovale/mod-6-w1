import express from "express";
import {config} from "dotenv";
import { apiRoute } from "./services/routes/api.routes.js";
import mongoose from "mongoose";
import cors from "cors";

//Questa istruzione carica le variabili d'ambiente definite nel file .env.
config();


//Questo imposta la variabile PORT utilizzando la porta specificata nelle variabili d'ambiente se presente, altrimenti utilizza la porta predefinita 3001.
const PORT = process.env.PORT || 3001;


//Qui, stiamo creando un'istanza di Express chiamata app.
const app = express();

//Applico CORS qui perché voglio che venga applicato a tutte le richieste: 
app.use(cors());

//Questo middleware consente di analizzare il corpo delle richieste in formato JSON.
app.use(express.json());

//Qui, stiamo dicendo a Express di utilizzare le definizioni delle rotte definite in apiRoute quando viene richiesto un percorso che inizia con /api.
app.use("/api", apiRoute);

//Questa funzione asincrona initServer si occupa di avviare il server Express e connettersi al database MongoDB utilizzando Mongoose.
const initServer = async () => {

    try {
        //Prima di avviare il server, ci connettiamo al database MongoDB utilizzando l'URL specificato nelle variabili d'ambiente.
        await mongoose.connect(process.env.MONGO_URL); 
        console.log("Connected");

        app.listen(PORT, () => {
        console.log(`Listening server at: ${PORT}`);
    });
    } catch (error) {
        console.error("error", error)
    }
}; 

initServer();