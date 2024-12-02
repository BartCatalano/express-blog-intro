// Imposto framework express 
const express = require(`express`);
const app = express();
const port = 3001;
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

});