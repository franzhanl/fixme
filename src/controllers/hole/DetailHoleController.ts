import { Request, Response } from "express";

import DetailHoleService from "../../services/hole/DetailHoleService";

export default class DetailHoleController {
    async handle(req:Request, res:Response) {
        const { id } = req.params

        const detailHoleService = new DetailHoleService()

        const hole = await detailHoleService.execute(id)
        
        return res.json(hole)
    }
}
