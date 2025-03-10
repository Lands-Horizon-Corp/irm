import { prisma } from "@/lib/db"
import { UserGender, UserRoles, UserStatus } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET() {

  const users = await prisma.user.count()
  if (users <= 0) {
    const church1 = await prisma.church.create({
      data: {
        address: "123 Church St, Cityville",
        latitude: 40,
        longitude: -75,
        images: {
          create: [
            { image: "church_image_1.jpg" },
            { image: "church_image_2.jpg" },
          ],
        },
      },
    })

    const church2 = await prisma.church.create({
      data: {
        address: "456 Holy Lane, Townsville",
        latitude: 41,
        longitude: -74,
        images: {
          create: [
            { image: "church_image_3.jpg" },
            { image: "church_image_4.jpg" },
          ],
        },
      },
    })

    const position1 = await prisma.position.create({
      data: {
        name: "Pastor",
        description: "Lead the church and community",
      },
    })

    const position2 = await prisma.position.create({
      data: {
        name: "Youth Leader",
        description: "Responsible for youth activities and outreach",
      },
    })

    const user1 = await prisma.user.create({
      data: {
        profilePicture: "user1.jpg",
        username: "john_doe",
        firstname: "John",
        lastname: "Doe",
        middlename: "Smith",
        birthday: new Date('1990-01-01'),
        contact: "123-456-7890",
        gender: UserGender.male,
        email: "john.doe@example.com",
        address: "123 Main St, Cityville",
        password: "hashed_password",
        role: UserRoles.admin,
        description: "A passionate leader.",
        status: UserStatus.married,
        church: {
          connect: { id: church1.id },
        },
        position: {
          connect: { id: position1.id },
        },
        children: {
          create: [
            {
              firstname: "Anna",
              lastname: "Doe",
              middlename: "Marie",
              birthday: new Date('2015-03-01'),
              gender: UserGender.female,
            },
          ],
        },
        eudcationalAttainment: {
          create: [
            {
              schoolname: "Cityville High",
              education: "High School Graduate",
            },
          ],
        },
        cases: {
          create: [
            {
              year: 2020,
              where: "Court A",
              case: "Case A",
              reason: "Reason A",
            },
          ],
        },
        subject: {
          create: [
            {
              name: "Math",
              description: "Mathematics subject for high school students",
              disabled: false,
            },
          ],
        },
      },
    })

    const user2 = await prisma.user.create({
      data: {
        profilePicture: "user2.jpg",
        username: "jane_doe",
        firstname: "Jane",
        lastname: "Doe",
        middlename: "Alice",
        birthday: new Date('1995-02-14'),
        contact: "987-654-3210",
        gender: UserGender.female,
        email: "jane.doe@example.com",
        address: "456 Oak St, Townsville",
        password: "hashed_password",
        role: UserRoles.user,
        description: "A dedicated teacher.",
        status: UserStatus.single,
        church: {
          connect: { id: church2.id },
        },
        position: {
          connect: { id: position2.id },
        },
        children: {
          create: [
            {
              firstname: "Tom",
              lastname: "Doe",
              middlename: "Junior",
              birthday: new Date('2020-04-15'),
              gender: UserGender.male,
            },
          ],
        },
        eudcationalAttainment: {
          create: [
            {
              schoolname: "Townsville University",
              education: "Bachelor's Degree",
            },
          ],
        },
        cases: {
          create: [
            {
              year: 2021,
              where: "Court B",
              case: "Case B",
              reason: "Reason B",
            },
          ],
        },
        subject: {
          create: [
            {
              name: "History",
              description: "History of the ancient civilizations",
              disabled: false,
            },
          ],
        },
      },
    })

    const user3 = await prisma.user.create({
      data: {
        profilePicture: "user3.jpg",
        username: "sam_smith",
        firstname: "Sam",
        lastname: "Smith",
        middlename: "James",
        birthday: new Date('1988-07-22'),
        contact: "555-123-4567",
        gender: UserGender.male,
        email: "sam.smith@example.com",
        address: "789 Pine St, Greenfield",
        password: "hashed_password",
        role: UserRoles.user,
        description: "A student of life.",
        status: UserStatus.widowed,
        church: {
          connect: { id: church1.id },
        },
        position: {
          connect: { id: position1.id },
        },
        children: {
          create: [
            {
              firstname: "Ella",
              lastname: "Smith",
              middlename: "Grace",
              birthday: new Date('2018-11-30'),
              gender: UserGender.female,
            },
          ],
        },
        eudcationalAttainment: {
          create: [
            {
              schoolname: "Greenfield Academy",
              education: "Master's Degree",
            },
          ],
        },
        cases: {
          create: [
            {
              year: 2022,
              where: "Court C",
              case: "Case C",
              reason: "Reason C",
            },
          ],
        },
        subject: {
          create: [
            {
              name: "Science",
              description: "Science subject for elementary students",
              disabled: false,
            },
          ],
        },
      },
    })
    return NextResponse.json({ user1, user2, user3 })
  }
  return NextResponse.json("already seeds")
}