 const express = require('express');
 const server = express();
 const port = 333; 
 const donors = [
    {
        name: "Fulano",
        blood: "AB+"
    },     
    {
        name: "Ciclano",
        blood: "O-"          
    },
    {
        name:"Beltrano",
        blood:"A+"
    },
    {
        name:"Sem Nome",
        blood:"AB+"
    }
];

 const nunjucks = require('nunjucks');
 nunjucks.configure("../FrontEnd", {
     express:server,
     noCache: true
 });


 server.use(express.static('../FrontEnd/public'));
 server.use(express.urlencoded({extended:true}));

 server.get('/', function(require, response){
     return response.render(`index.html`, {donors});
 });
 server.post('/', function(require, response){
    const name = require.body.name;
    const email = require.body.email;
    const blood = require.body.blood;

    donors.push({name, blood});
    return response.redirect('/');
 });


 server.listen(port, function(){
     console.log(`Servidor iniciado na porta ${port}`);
 }); 