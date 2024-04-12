//Questo codice definisce le rotte dell'API per l'entità "Author" utilizzando Express.js.
//Ogni rotta corrisponde a un'operazione CRUD (Create, Read, Update, Delete) sull'entità "Author" nel database. 
//Ecco una spiegazione dettagliata di ogni parte del codice:
import { Router } from "express";
import Author from "../models/author.model.js";


//Qui, stiamo creando un oggetto apiRoute utilizzando il metodo Router() di Express. Questo oggetto sarà utilizzato per definire le rotte dell'API.
export const apiRoute = Router();


//Questa route gestisce la richiesta GET per ottenere tutti gli autori.
apiRoute.get("/authors", async (req, res, next) => {
    try {

        //Utilizzando Author.find(), viene eseguita una query al database per recuperare tutti gli autori.
        let authors = await Author.find();
        //Se la query ha successo, la risposta contiene un array di tutti gli autori trovati nel database.
        res.send(authors);

    } catch (error) {
        next(error);
    }
});

//Questa route gestisce la richiesta GET per ottenere un autore specifico in base all'ID.
apiRoute.get("/authors/:id", async (req, res, next) => {
    try {

        //Utilizzando Author.findById(req.params.id), viene eseguita una query al database per recuperare l'autore con l'ID specificato nella richiesta.
        let author = await Author.findById(req.params.id);

        if (author) {

            res.send(author);

        } else {

            res.status(404).send("Author not found!")
        }  

    } catch (error) {

        next(error);
    }
})

//Questa route gestisce la richiesta POST per creare un nuovo autore.
apiRoute.post("/authors", async (req, res, next) => {
    try {

        //Utilizzando Author.create(req.body), viene creato un nuovo documento autore nel database utilizzando i dati contenuti nel corpo della richiesta.
        let author = await Author.create(req.body);
        res.status(201).send(author);

    } catch (error) {

        next(error);
    }
});


//Questa route gestisce la richiesta PUT per aggiornare un autore esistente.
apiRoute.put("/authors/:id", async (req, res, next) => {

    try {

        //Utilizzando Author.findByIdAndUpdate(req.params.id, req.body, { new: true }), viene eseguito un aggiornamento nel database per l'autore con l'ID specificato, utilizzando i dati contenuti nel corpo della richiesta.
        let author = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.send(author);
    } catch (error) {

        next(error);        
    }
});

//Questa route gestisce la richiesta DELETE per eliminare un autore.
apiRoute.delete("/authors/:id", async (req, res, next) => {

    try {

        //Utilizzando Author.deleteOne({ _id: req.params.id }), viene eseguita un'operazione di eliminazione nel database per l'autore con l'ID specificato nella richiesta.
        await Author.deleteOne({_id: req.params.id});

        res.send("L'autore è stato eliminato correttamente!").status(204);

    } catch (error) {
        
        next(error);
    }
});

 