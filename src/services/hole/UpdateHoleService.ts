import prismaClient from "../../prisma";

export default class UpdateHoleService{
    async execute(holeId: string, newAddress: string, newDescription: string, newPicture: string, newSolved: boolean){
        const hole = await prismaClient.hole.update({
            where: {
                id: holeId
            },
            data: {
                address: newAddress,
                description: newDescription,
                picture: newPicture,
                solved: newSolved
            }
        })

        return hole
    }
}