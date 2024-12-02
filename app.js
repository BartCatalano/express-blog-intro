// Imposto framework express 
const express = require(`express`);
const app = express();
const port = 3001;
// importo js con lista 
 const bacheca = require("./data");

// creo assets pubblico per le immagini
app.use(express.static("images"));

// creo rotta base 
app.get("/", (req, res) => {
    res.send("Server del mio blog");
});
//  creo rotta che restituisce lista dei post e conteggio
app.get(`/bacheca`,(req, res) =>{
    const data = {
        elenco: bacheca,
        totale: bacheca.length
    }
    res.jason(data);
});


// creo rotta di apertura server
app.listen(port,() =>{
console.log("Server pronto!");

});