import { eq } from 'drizzle-orm'
import { GraphQLFieldConfig, GraphQLInt, GraphQLNonNull } from 'graphql'
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

export const FindByIdQuery: GraphQLFieldConfig<any, any, { id: number }> = {
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (_, { id }) => {
    const tableWithId = await db
      .select({ table: idTable.table })
      .from(idTable)
      .where(eq(idTable.id, id))

    const table = tables[tableWithId[0].table as keyof typeof tables]
    const result = await db.select().from(table).where(eq(table.id, id))

    return format(result)
  },
  type: NodeType,
}
