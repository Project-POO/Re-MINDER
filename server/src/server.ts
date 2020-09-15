import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json())

<<<<<<< HEAD
app.use(routes);
=======
//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT:Atualizar uma informação exitente
//DELETE: Deçetar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, Filtros, ordenação


app.post('/users',(request, response) =>{
    console.log(request.query)

    const users= [
        {name:'Diego', age : 25 },
        {name: 'Vini', age:21},
    ];

    return response.json(users);
});
>>>>>>> 23ba0e5b6282a5f0cdaaa46b30b15655c7101e22

app.listen(3333);