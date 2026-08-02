import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export async function seedAdmin(prisma: PrismaClient) {

  console.log("Seeding admin user...");

  const hashedPassword = await bcrypt.hash(
    "SUPERapplication@2007",
    10
  );


  await prisma.user.upsert({

    where:{
      email:"admin@campusvault.com"
    },


    update:{
      role: "SUPER_ADMIN",
    },


    create:{

      firstName:"Super",
      lastName:"Admin",

      username:"superadmin",

      email:"apoooorvabd@gmail.com",

      password:hashedPassword,

      role: "SUPER_ADMIN",

      universityId: "cmsbhx1ym0000u5a8y7j8kkfd",

      collegeId: "cmsbi2mrp002xu548h2l6skyp",

      courseId: "cmsbi7879008fu5i8i8ylotn2",

      currentSemester:5,

      isVerified:true,

      isActive:true
    }

  });


  console.log("✅ Admin seeded successfully");

}