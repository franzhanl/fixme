import { Request, Response } from "express";

import ListHolesService from "../../services/hole/ListHolesService";

export default class ListHolesController{
    async handle(req: Request, res: Response){
        const listHolesService = new ListHolesService()

        const list = await listHolesService.execute()

        return res.json(list)
    }
}