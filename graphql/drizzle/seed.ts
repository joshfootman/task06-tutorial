import { db } from './config'
import { biology, chemistry, institutions, physics } from './data'
import {
  idTable,
  institutionsTable,
  laboratoriesTable,
  projectsTable,
  relationshipsTable,
  researchersTable,
} from './schema'

async function getId(table: string) {
  const result = await db
    .insert(idTable)
    .values({ table })
    .returning({ id: idTable.id })

  return result[0].id
}

async function seed() {
  console.log('🌱 Seeding...')
  console.time(`🌱 Database has been seeded`)

  institutions.forEach(async (institution) => {
    const id = await getId('institutions')
    await db.insert(institutionsTable).values({ ...institution, id })
  })

  biology.projects.forEach(async (project) => {
    const id = await getId('projects')
    await db.insert(projectsTable).values({ ...project, id })
  })

  biology.laboratories.forEach(async (laboratory) => {
    const id = await getId('laboratories')
    await db.insert(laboratoriesTable).values({ ...laboratory, id })
  })

  biology.researchers.forEach(async (researcher) => {
    const id = await getId('researchers')
    await db.insert(researchersTable).values({ ...researcher, id })
  })

  biology.relationships.forEach(async ({ type, ...rest }) => {
    const id = await getId('relationships')
    await db.insert(relationshipsTable).values({
      ...rest,
      type: type as (typeof relationshipsTable.$inferSelect)['type'],
      id,
    })
  })

  chemistry.projects.forEach(async (project) => {
    const id = await getId('projects')
    await db.insert(projectsTable).values({ ...project, id })
  })

  chemistry.laboratories.forEach(async (laboratory) => {
    const id = await getId('laboratories')
    await db.insert(laboratoriesTable).values({ ...laboratory, id })
  })

  chemistry.researchers.forEach(async (researcher) => {
    const id = await getId('researchers')
    await db.insert(researchersTable).values({ ...researcher, id })
  })

  chemistry.relationships.forEach(async ({ type, ...rest }) => {
    const id = await getId('relationships')
    await db.insert(relationshipsTable).values({
      ...rest,
      type: type as (typeof relationshipsTable.$inferSelect)['type'],
      id,
    })
  })

  physics.projects.forEach(async (project) => {
    const id = await getId('projects')
    await db.insert(projectsTable).values({ ...project, id })
  })

  physics.laboratories.forEach(async (laboratory) => {
    const id = await getId('laboratories')
    await db.insert(laboratoriesTable).values({ ...laboratory, id })
  })

  physics.researchers.forEach(async (researcher) => {
    const id = await getId('researchers')
    await db.insert(researchersTable).values({ ...researcher, id })
  })

  physics.relationships.forEach(async ({ type, ...rest }) => {
    const id = await getId('relationships')
    await db.insert(relationshipsTable).values({
      ...rest,
      type: type as (typeof relationshipsTable.$inferSelect)['type'],
      id,
    })
  })

  console.timeEnd(`🌱 Database has been seeded`)
}

seed().catch((e) => {
  console.error(e)
  process.exit(1)
})
