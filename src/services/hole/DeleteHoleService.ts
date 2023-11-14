import prismaClient from "../../prisma";

export default class DeleteHoleService{
    async execute(holeId: string){
        try{
            await prismaClient.hole.delete({
                where: {
                    id: holeId
                }
            })
            return { message: "Delete efetuado com sucesso!"}

        }catch(err){
            return { message: "Erro no Delete"}
        }
        

    }
}