import { prisma } from "@/lib/prisma";

// get all info + projects of a user
export async function GET(req: Request) {
    const {searchParams} = new URL (req.url);
    const userId = searchParams.get("userId");

    try {
        const userInfo = await prisma.user.findUnique({
            where:{
                id:Number(userId),

            },
            include:{
                projects:true  }
        })

        return new Response (JSON.stringify(userInfo), {status: 200})
    } catch (error) {
        
        return new Response ("Project fetch failed", {status: 400})
        
    }


}


// creating a new project for a user

export async function POST(req: Request) {

    const {userId,title,content} = await req.json();

    
    try {
        const createdProject = await prisma.project.create({
            data:{
                title: title || "Untitled Project",
                userId: Number(userId),
                content: content 

            }
        })
        return new Response (JSON.stringify(createdProject), {status: 201})
    } catch (error) {
        return new Response ("Project creation failed", {status: 400})
        
    }


}


export async function PUT(req: Request) {

    const reqBody = await req.json();

    
    try {
        const updatedProject = await prisma.project.update({
            where:{
                id: Number (reqBody.id)
            },
            data:{
                ...reqBody
            }
        })
        return new Response (JSON.stringify(updatedProject), {status: 201})
    } catch (error) {
        return new Response ("Project creation failed", {status: 400})
        
    }   

}