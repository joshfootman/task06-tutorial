import {
  GraphQLFieldConfig,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'

import { NodeType } from '../common.js'
import { db } from '../../drizzle/config.js'
import {
  institutionsTable,
  laboratoriesTable,
  projectsTable,
  relationshipsTable,
  researchersTable,
} from '../../drizzle/schema.js'
import { eq, inArray } from 'drizzle-orm'
import { format } from '../../utils/format.js'

export const SearchByDepartmentQuery: GraphQLFieldConfig<
  any,
  any,
  { department: 'Biological Sciences' | 'Chemistry' | 'Physics & Astronomy' }
> = {
  args: {
    department: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { department }) => {
    const projects = await db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.department, department))

    const laboratories = await db
      .select()
      .from(laboratoriesTable)
      .where(eq(laboratoriesTable.department, department))

    const researchers = await db
      .select()
      .from(researchersTable)
      .where(eq(researchersTable.department, department))

    const relationships = await db
      .select()
      .from(relationshipsTable)
      .where(
        inArray(relationshipsTable.source, [
          ...laboratories.map((l) => l.id),
          ...researchers.map((r) => r.id),
        ])
      )

    const institutions = await db
      .select()
      .from(institutionsTable)
      .where(
        inArray(
          institutionsTable.id,
          relationships.map((r) => r.target)
        )
      )

    return format([
      ...projects,
      ...laboratories,
      ...researchers,
      ...institutions,
    ])
  },
  type: new GraphQLList(NodeType),
}
