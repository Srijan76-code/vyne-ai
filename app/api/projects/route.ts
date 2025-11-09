import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

    const {id,userId} = await req.json();

    
    try {
        const createdProject = await prisma.project.create({
            data:{
                id: Number(id),
                userId: Number(userId)

            }
        })
        return new Response (JSON.stringify(createdProject), {status: 201})
    } catch (error) {
        return new Response ("Project creation failed", {status: 400})
        
    }


}

