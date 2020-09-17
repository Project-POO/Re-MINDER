import {Request, Response} from 'express'
import db from '../database/connection';

export default class PostitController {
    async index(request: Request, response: Response) {
        // const filters = request.query;

        // if (!filters.title){
        //     return response.status(400).json({
        //         error: "Missing filters to search PostIts"
        //     })
        // }

        const postit = await db('postit')
            // .where('postit.title', '=', filters.title as string)

        return response.json(postit)
    }

    async create(request: Request, response: Response) {
        const {
            title,
            content
        } = request.body;
    
        const trx = await db.transaction();
    
        try{
            await trx('postit').insert({
                title,
                content,
            });
        
            await trx.commit();
        
            return response.status(201).send();
        }catch(err){
            trx.rollback();
            return response.status(400).json({
                error: "Unexpected error while creating new PostIt"
            })
        }
    }
}