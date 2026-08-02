import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const universities = [
    {
        name: "Delhi University",
        shortName: "DU",
        website: "https://www.du.ac.in/",
    },
    {
        name: "Example University",
        shortName: "Exam",
        website: "https://infycorepay.com/",
    },
  ];

export async function seedUniversity(prisma: PrismaClient) {
    console.log("Seeding universities...");
   await Promise.all(
    universities.map((university) =>
      prisma.university.upsert({
        where: { shortName: university.shortName },
        update: university,
        create: university,
      })
    )
  );
console.log("✅ Universities seeded successfully.");
}
