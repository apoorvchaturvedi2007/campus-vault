import {PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';


export async function seedUser(prisma: PrismaClient) {

  console.log("Seeding  user...");

  const hashedPassword = await bcrypt.hash(
    "Super@2007",
    10
  );


  await prisma.user.upsert({

    where:{
      email:"mrapoorvchaturvedi7@gmail.com"
    },


    update:{
      role: "SUPER_ADMIN",
    },


    create:{

      firstName:"Super",
      lastName:"user",

      username:"user1",

      
      email:"mrapoorvchaturvedi7@gmail.com",

      password:hashedPassword,


      universityId: "cmsbhx1ym0000u5a8y7j8kkfd",

      collegeId: "cmsbi2mrp002xu548h2l6skyp",

      courseId: "cmsbi7879008fu5i8i8ylotn2",

      currentSemester:5,

      isVerified:true,

      isActive:true
    }

  });


  console.log("✅ user seeded successfully");

}