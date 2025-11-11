import { prisma } from "@/lib/prisma";


// get all projects for community page
export async function GET() {

    try {
        const projects = await prisma.project.findMany()

        return new Response (JSON.stringify(projects), {status: 200})
    } catch (error) {

        return new Response ("Project fetch failed", {status: 400})
        
    }

}





