import { PrismaClient } from "@prisma/client";
import { courses } from "./../../../sources/course";

export async function seedCourse(prisma: PrismaClient) {

  console.log("Seeding courses...");

  const university = await prisma.university.findUnique({
    where: {
      shortName: "DU",
    },
  });

  if (!university) {
    throw new Error("DU university not found");
  }


  await Promise.all(
    courses.map((course) =>
      prisma.course.upsert({

        where: {
          name_universityId: {
            name: course.name,
            universityId: university.id,
          },
        },

        update: {
          shortName: course.shortName,
          code: course.code,
          durationYears: course.durationYears,
          totalSemesters: course.totalSemesters,
        },

        create: {
          name: course.name,
          shortName: course.shortName,
          code: course.code,
          durationYears: course.durationYears,
          totalSemesters: course.totalSemesters,
          universityId: university.id,
        },

      })
    )
  );


  console.log("✅ Courses seeded successfully.");
}