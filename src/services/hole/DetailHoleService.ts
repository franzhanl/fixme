import prismaClient from "../../prisma";

interface DataHole{
    address: string;
    description: string;
    picture: string;
    solved: boolean;
}

export default class DetailHoleService {
    async execute(holeId: string){

        const holeData = prismaClient.hole.findUnique({
            where: {
                id: holeId
            }
        })

        return(holeData)
    }
}