import prismaClient from "../../prisma";

interface IHole{
    address: string;
    description: string;
    picture: string;
    solved: boolean;
}

export default class CreateHoleService {
    async execute({address, description, picture, solved}: IHole){
        const hole = await prismaClient.hole.create({
            data:{
                address: address,
                description: description,
                picture: picture,
                solved: solved
            },
            select:{
                address: true,
                description: true,
                picture: true,
                solved: true
            }
        })

        return hole
        
    }
}