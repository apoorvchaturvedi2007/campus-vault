import {PrismaClient} from "@prisma/client";
import { seedUniversity } from "./seed/university.seed";
import { seedCollege } from "./seed/college.seed";
import { seedCourse } from "./seed/courses.seed";
import { seedSubject } from "./seed/subjects.seeed";
// import { seedUser } from "./seed/user.seed";
import { seedAdmin } from "./seed/Admin.seed";
import {seedUser} from "./seed/User.seed";

 const prisma = new PrismaClient();
 async function main() {
    console.log("Seeding database...");
    //  await seedUniversity(prisma);
    //  await seedCollege(prisma);
    //  await seedCourse(prisma);
    //  await seedCollegeCourse(prisma);
    //  await seedSubject(prisma);
    //  await seedUser(prisma);
   //  await seedAdmin(prisma);
      await seedUser(prisma);

  console.log("✅ Database seeded successfully.");
 }

 main()
 .catch((e) => {
    console.error(e);
 }
).finally(async () => {
    await prisma.$disconnect();
 }
);

//