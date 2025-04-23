import { eq } from 'drizzle-orm'
import { db } from '../drizzle/config'
import {
  institutionsTable,
  laboratoriesTable,
  projectsTable,
  relationshipsTable,
  researchersTable,
} from '../drizzle/schema'

type Project = typeof projectsTable.$inferSelect
type Laboratory = typeof laboratoriesTable.$inferSelect
type Researcher = typeof researchersTable.$inferSelect
type Institution = typeof institutionsTable.$inferSelect
type Relationship = typeof relationshipsTable.$inferSelect

type Entity = Project | Laboratory | Researcher | Institution

type FormattedEntity = Entity & {
  relationships: Array<
    Relationship & {
      node: Entity
    }
  >
}

export const format = (entities: Entity[]): FormattedEntity[] => {
  const results: FormattedEntity[] = []

  entities.forEach(async (entity) => {
    const formattedEntity: FormattedEntity = { ...entity, relationships: [] }

    const relationships = await db
      .select()
      .from(relationshipsTable)
      .where(eq(relationshipsTable.source, entity.id))

    relationships.forEach(async (relationship) => {
      const project = await db
        .select()
        .from(projectsTable)
        .where(eq(projectsTable.id, relationship.target))

      if (project.length) {
        formattedEntity.relationships.push({
          ...relationship,
          node: project[0],
        })
      } else {
        const laboratory = await db
          .select()
          .from(laboratoriesTable)
          .where(eq(laboratoriesTable.id, relationship.target))

        if (laboratory.length) {
          formattedEntity.relationships.push({
            ...relationship,
            node: laboratory[0],
          })
        } else {
          const researcher = await db
            .select()
            .from(researchersTable)
            .where(eq(researchersTable.id, relationship.target))

          if (researcher.length) {
            formattedEntity.relationships.push({
              ...relationship,
              node: researcher[0],
            })
          } else {
            const institution = await db
              .select()
              .from(institutionsTable)
              .where(eq(institutionsTable.id, relationship.target))

            if (institution.length) {
              formattedEntity.relationships.push({
                ...relationship,
                node: institution[0],
              })
            }
          }
        }
      }
    })

    results.push(formattedEntity)
  })
  return results
}
