//Schema e model sono parti di Mongoose che ci consentono di definire schemi e modelli per i dati che desideriamo archiviare nel database MongoDB.
import { Schema, model } from "mongoose";

//Questo è un modulo che definisce lo schema di un autore utilizzando Mongoose, un ORM per MongoDB
const authorSchema = new Schema( //authorSchema è definito utilizzando il costruttore new Schema(), che accetta due parametri: un oggetto che rappresenta la struttura dello schema e un oggetto opzionale per le opzioni di configurazione.

    //All'interno dello schema, abbiamo definito i campi per l'autore: name, surname, email, birth, e avatar, ciascuno con il proprio tipo di dati e opzioni.
    {
        name : {
            type: String,
            required: true
        }, 
        surname : {
            type: String, 
            required: true
        }, 
        email : {
            type: String, 
            required: true
        }, 
        birth : {
            type: String, 
            required: true
        }, 
        avatar : {
            type: String, 
            required: true
        }
    },

    //Questo è il nome della collezione in cui verranno memorizzati i documenti di questo tipo.
    {
        collection: "authors"
    }
)


//Utilizzando model(), definiamo un modello per l'entità "Author", che verrà associata allo schema authorSchema.
//Il modello "Author" è quindi esportato utilizzando export default, rendendolo disponibile per l'utilizzo in altri moduli.
export default model("Author", authorSchema);