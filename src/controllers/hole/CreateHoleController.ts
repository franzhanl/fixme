import { Request, Response } from "express";

import CreateHoleService from "../../services/hole/CreateHoleService";

export default class CreateHoleController {
    async handle(req: Request, res: Response){
        const {address, description, picture, solved} = req.body

        const createHoleService = new CreateHoleService()

        const hole = await createHoleService.execute({
            address,
            description,
            picture,
            solved
        })

        return res.json(hole)

    }
}