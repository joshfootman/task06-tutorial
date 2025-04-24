import { and, eq, like, inArray } from 'drizzle-orm'
import { union } from 'drizzle-orm/sqlite-core'
import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'
import { db } from '../../drizzle/config.js'
import {
  idTable,
  institutionsTable,
  laboratoriesTable,
  projectsTable,
  researchersTable,
} from '../../drizzle/schema.js'
import { format } from '../../utils/format.js'
import { NodeType } from '../common.js'

const tables = {
  projects: projectsTable,
  laboratories: laboratoriesTable,
  researchers: researchersTable,
  institutions: institutionsTable,
}

export const SearchByNameQuery: GraphQLFieldConfig<
  any,
  any,
  {
    term: string
    departments: ('Biological Sciences' | 'Chemistry' | 'Physics & Astronomy')[]
    limit: number
  }
> = {
  args: {
    term: {
      type: new GraphQLNonNull(GraphQLString),
    },
    departments: {
      type: new GraphQLList(GraphQLString),
      defaultValue: ['Biological Sciences', 'Chemistry', 'Physics & Astronomy'],
    },
    limit: { type: GraphQLInt, defaultValue: 50 },
  },
  resolve: async (_, { departments, limit, term }) => {
    const result = await union(
      db
        .select({ id: projectsTable.id })
        .from(projectsTable)
        .where(
          and(
            like(projectsTable.name, `%${term}%`),
            inArray(projectsTable.department, departments)
          )
        ),
      db
        .select({ id: laboratoriesTable.id })
        .from(laboratoriesTable)
        .where(
          and(
            like(laboratoriesTable.name, `%${term}%`),
            inArray(laboratoriesTable.department, departments)
          )
        ),
      db
        .select({ id: researchersTable.id })
        .from(researchersTable)
        .where(
          and(
            like(researchersTable.name, `%${term}%`),
            inArray(researchersTable.department, departments)
          )
        ),
      db
        .select({ id: institutionsTable.id })
        .from(institutionsTable)
        .where(like(institutionsTable.name, `%${term}%`))
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

    return await format(entities)
  },
  type: new GraphQLList(NodeType),
}
