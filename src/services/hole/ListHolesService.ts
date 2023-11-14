import prismaClient from "../../prisma";

export default class ListHolesService{
    async execute(){
        const holesList = await prismaClient.hole.findMany()

        return holesList
    }
}