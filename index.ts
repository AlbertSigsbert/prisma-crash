import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //Prisma Queries

    //CREATE USERS
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'John Doe',
    //         email: 'john@gmail.com'
    //     }
    // })

    //GET  ALL  USERS
  
    //CREATE ARTICLE AND ASSOCIATE IT WITH USER
    //    const article = await prisma.article.create({
    //     data:{
    //         title:'Introduction to Prisma',
    //         body:'Prisma ORM is a modern database toolkit for Node.js and TypeScript, offering easy, type-safe database access and migrations for developers.',
    //         author:{
    //             connect:{
    //                 id:1
    //             }
    //         }
    //     }
    //    })


    //    const article = await prisma.article.create({
    //     data:{
    //         title:'Sample Article',
    //         body:'This is a sample article',
    //         author:{
    //             connect:{
    //                 id:2
    //             }
    //         }
    //     }
    //    })

    //GET ARTICLES
    // const articles = await prisma.article.findMany();


    //USER & ARTICLE AND ASSOCIATE THEM
    //     const user = await prisma.user.create({
    //     data: {
    //         name: 'Sarah Smith',
    //         email: 'sara@gmail.com',
    //         articles:{
    //              create:{
    //                 title:'Sarahs First Article',
    //                 body:'This is saras first article'
                     
    //              }
    //         }
    //     } 
    // })

    // console.log(articles);


}


main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1);
})
