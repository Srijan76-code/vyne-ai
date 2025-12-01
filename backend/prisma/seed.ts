// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   console.log("Seeding database...");

//   // --- USERS ---

//   const users = await prisma.user.createMany({
//     data: [
//       {

//         username: "johndoe",
//         bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         website: "https://johndoe.com",
//         contacts: "@dceewe"
//       },
//       {
//         username: "sara",
//         bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         website: "https://johndoe.com",
//         contacts: "@dceewe"
//       },
//       {
//         username: "mike",
//         bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         website: "https://johndoe.com",
//         contacts: "@dceewe"
//       },
//       {
//         username: "anna",
//         bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         website: "https://johndoe.com",
//         contacts: "@dceewe"
//       },
//       {
//         username: "dev",
//         bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         website: "https://johndoe.com",
//         contacts: "@dceewe"
//       },
//     ],
//   });

//   console.log("Users seeded.");

//   // // Fetch users (to use IDs)
//   // const allUsers = await prisma.user.findMany();

//   // // --- PROJECTS ---

//   // const projectData = [
//   //   {
//   //     title: "AI Code Generator",
//   //     content: {
//   //       description: "Generates code using AI models.",
//   //       components: ["Editor", "Model Selector", "Preview Panel"],
//   //     },
//   //     deploymentStatus: "success",
//   //     deploymentUrl: "https://ai-generator.app",
//   //     isPublic: true,
//   //     publicDescription: "Create AI-generated code instantly",
//   //     Likes: 24,
//   //     Clones: 5,
//   //   },
//   //   {
//   //     title: "Portfolio Website",
//   //     content: {
//   //       description: "A personal portfolio built with Next.js",
//   //       pages: ["Home", "Projects", "Contact"],
//   //     },
//   //     deploymentStatus: "success",
//   //     deploymentUrl: "https://portfolio.dev",
//   //     isPublic: true,
//   //     publicDescription: "Showcase your skills and projects",
//   //     Likes: 18,
//   //     Clones: 3,
//   //   },
//   //   {
//   //     title: "Chat App",
//   //     content: {
//   //       description: "Real-time chat with WebSockets",
//   //       features: ["Typing Indicator", "Rooms", "Private Chat"],
//   //     },
//   //     deploymentStatus: "failed",
//   //     isPublic: false,
//   //     Likes: 5,
//   //     Clones: 1,
//   //   },
//   //   {
//   //     title: "Recipe Finder",
//   //     content: {
//   //       description: "Search recipes by ingredients",
//   //       api: "Spoonacular API",
//   //     },
//   //     deploymentStatus: "success",
//   //     deploymentUrl: "https://recipes.app",
//   //     isPublic: true,
//   //     Likes: 40,
//   //     Clones: 10,
//   //   },
//   //   {
//   //     title: "Blog CMS",
//   //     content: {
//   //       description: "Simple CMS for writing blogs",
//   //       tech: ["Next.js", "Prisma", "PostgreSQL"],
//   //     },
//   //     deploymentStatus: "pending",
//   //     isPublic: true,
//   //     Likes: 12,
//   //     Clones: 4,
//   //   },
//   // ];

//   // // Attach 2 projects to each user
//   // let index = 0;

//   // for (const user of allUsers) {
//   //   await prisma.project.createMany({
//   //     data: [
//   //       {
//   //         ...projectData[index % projectData.length],
//   //         userId: user.id,
//   //       },
//   //       {
//   //         ...projectData[(index + 1) % projectData.length],
//   //         userId: user.id,
//   //       },
//   //     ],
//   //   });

//   //   index++;
//   // }

//   // console.log("Projects seeded.");
// }

// main()
//   .then(() => {
//     console.log("Seeding completed.");
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });




import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const data = [
    {
      username: "johndoe",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      website: "https://johndoe.com",
      contacts: "@dceewe",
    },
    {
      username: "sara",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      website: "https://johndoe.com",
      contacts: "@dceewe",
    },
    {
      username: "mike",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      website: "https://johndoe.com",
      contacts: "@dceewe",
    },
    {
      username: "anna",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      website: "https://johndoe.com",
      contacts: "@dceewe",
    },
    {
      username: "dev",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      website: "https://johndoe.com",
      contacts: "@dceewe",
    },
    {
      username: "alex",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      website: "https://johndoe.com",
      contacts: "@dceewe",
    },
  ];

  console.log("Updating users...");

  for (let i = 0; i < data.length; i++) {
    const userId = i + 1; // ids 1–6

    await prisma.user.update({
      where: { id: userId },
      data: data[i],
    });

    console.log(`Updated user ${userId}`);
  }

  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
