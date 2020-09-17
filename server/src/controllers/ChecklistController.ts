import {Request, Response} from 'express'
import db from '../database/connection';

export default class ChecklistController {
    async index(request: Request, response: Response) {
        // const filters = request.query;

        // if (!filters.title){
        //     return response.status(400).json({
        //         error: "Missing filters to search Checklist"
        //     })
        // }

        const postit = await db('checklist')
            // .where('checklist.title', '=', filters.title as string)
            .join('checklist_valor', 'checklist_valor.checklist_id', '=', 'checklist.id')
            .select('checklist.*', 'checklist_valor.*')

        return response.json(postit)
    }

    async create(request: Request, response: Response) {
        const {
            title,
            valor,
            check
        } = request.body;
    
        const trx = await db.transaction();
    
        try{
            const checkListInsertedIds = await trx('checklist').insert({
                title,
            });
    
            const checklist_id = checkListInsertedIds[0];
    
            await trx('checklist_valor').insert({
                valor,
                check,
                checklist_id
            });
    
            await trx.commit();
    
            return response.status(201).send();
        }catch(err){
            trx.rollback();
            return response.status(400).json({
                error: "Unexpected error while creating new CheckList"
            })
        }
    }
}