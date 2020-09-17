import express from 'express';
import ChecklistController from './controllers/ChecklistController';
import PostitController from './controllers/PostitController';

const routes = express.Router()
const postitControllers = new PostitController;
const checklistControllers = new ChecklistController;

//PostIt
routes.get('/postIt', postitControllers.index);
routes.post('/postIt', postitControllers.create)

//Checklist
routes.get('/checklist', checklistControllers.index);
routes.post('/checklist', checklistControllers.create);

export default routes