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

const getTargetEntity = async (target: number) => {
  const project = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.id, target))

  if (project.length) {
    return project[0]
  }

  const laboratory = await db
    .select()
    .from(laboratoriesTable)
    .where(eq(laboratoriesTable.id, target))

  if (laboratory.length) {
    return laboratory[0]
  }

  const researcher = await db
    .select()
    .from(researchersTable)
    .where(eq(researchersTable.id, target))

  if (researcher.length) {
    return researcher[0]
  }

  const institution = await db
    .select()
    .from(institutionsTable)
    .where(eq(institutionsTable.id, target))

  if (institution.length) {
    return institution[0]
  }
}

const getFormattedRelationships = async (id: number) => {
  const formattedRelationships: FormattedEntity['relationships'] = []
  const relationships = await db
    .select()
    .from(relationshipsTable)
    .where(eq(relationshipsTable.source, id))

  for (const relationship of relationships) {
    const targetEntity = await getTargetEntity(relationship.target)
    formattedRelationships.push({
      ...relationship,
      node: targetEntity,
    })
  }

  return formattedRelationships
}

export const format = async (
  entities: Entity[]
): Promise<FormattedEntity[]> => {
  const results: FormattedEntity[] = []

  for (const entity of entities) {
    const formattedEntity: FormattedEntity = { ...entity, relationships: [] }
    const formattedRelationships = await getFormattedRelationships(entity.id)
    formattedEntity.relationships.push(...formattedRelationships)
    results.push(formattedEntity)
  }

  return results
}
