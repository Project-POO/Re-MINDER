import express from 'express';

const app = express();

app.use(express.json());

app.delete('/', (request, response) => {
    console.log(request.params);

    const users=[
        { name: 'daniel', age: 22 },
    ];

    return response.json(users)
});

app.listen(3333);
