import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    })

    console.log(res);
}

//insertUser("namansharma1@gmail.com", "password1", "Aman", "Sharma");

async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        where: {
            username
        }
    })

    console.log(res);
}

getUser("namansharma1@gmail.com");