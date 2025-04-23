import { union } from 'drizzle-orm/sqlite-core'
import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'
import { NodeType } from '../common.js'
import {
  idTable,
  institutionsTable,
  laboratoriesTable,
  projectsTable,
  researchersTable,
} from '../../drizzle/schema.js'
import { db } from '../../drizzle/config.js'
import { eq, ilike } from 'drizzle-orm'
import { format } from '../../utils/format.js'

const tables = {
  projects: projectsTable,
  laboratories: laboratoriesTable,
  researchers: researchersTable,
  institutions: institutionsTable,
}

export const SearchByNameQuery: GraphQLFieldConfig<
  any,
  any,
  { term: string; departments: string[]; limit: number }
> = {
  args: {
    term: {
      type: new GraphQLNonNull(GraphQLString),
    },
    departments: { type: new GraphQLList(GraphQLString) },
    limit: { type: GraphQLInt, defaultValue: 50 },
  },
  resolve: async (_, { departments, limit, term }) => {
    const result = await union(
      db
        .select({ id: projectsTable.id })
        .from(projectsTable)
        .where(ilike(projectsTable.name, `%${term}%`)),
      db
        .select({ id: laboratoriesTable.id })
        .from(laboratoriesTable)
        .where(ilike(laboratoriesTable.name, `%${term}%`)),
      db
        .select({ id: researchersTable.id })
        .from(researchersTable)
        .where(ilike(researchersTable.name, `%${term}%`)),
      db
        .select({ id: institutionsTable.id })
        .from(institutionsTable)
        .where(ilike(institutionsTable.name, `%${term}%`))
    ).limit(limit)

    const entities = await Promise.all(
      result.map(async ({ id }) => {
        const tableWithId = await db
          .select({ table: idTable.table })
          .from(idTable)
          .where(eq(idTable.id, id))

        const table = tables[tableWithId[0].table as keyof typeof tables]
        const result = await db.select().from(table).where(eq(table.id, id))
        return result[0]
      })
    )

    return format(entities)
  },
  type: new GraphQLList(NodeType),
}
