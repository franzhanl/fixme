import { Request, Response } from "express";
import DeleteHoleService from "../../services/hole/DeleteHoleService";

export default class DeleteHoleController {
    async handle(req: Request, res: Response){
        const { id } = req.params

        const deleteHoleService = new DeleteHoleService()

        const messageFromExecuteOfDelete = await deleteHoleService.execute(id)

        return res.json(messageFromExecuteOfDelete)
    }
}