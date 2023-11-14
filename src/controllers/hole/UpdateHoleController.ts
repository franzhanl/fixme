import { Request, Response } from "express";

import UpdateHoleService from "../../services/hole/UpdateHoleService";

export default class UpdateHoleController{
    async handle(req: Request, res: Response){
        const { id, address, description, picture, solved } = req.body

        const updateHoleService = new UpdateHoleService()

        const updatedHole = await updateHoleService.execute(id, address, description, picture, solved)

        return res.json(updatedHole)
    }
}