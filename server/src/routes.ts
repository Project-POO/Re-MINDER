import express from 'express';
import db from './database/connections';

const routes = express.Router()

routes.post('/postIt', async (request, response) => {
    const {
        title,
        content
    } = request.body;

    await db('postit').insert({
        title,
        content,
    });

    return response.send();
});

export default routes