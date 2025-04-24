import { count, inArray } from 'drizzle-orm'
import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { db } from '../../drizzle/config'
import {
  institutionsTable,
  laboratoriesTable,
  projectsTable,
  researchersTable,
} from '../../drizzle/schema'

export const DashboardCountsQuery: GraphQLFieldConfig<
  any,
  any,
  {
    departments: ('Biological Sciences' | 'Chemistry' | 'Physics & Astronomy')[]
  }
> = {
  args: {
    departments: {
      type: new GraphQLList(GraphQLString),
      defaultValue: ['Biological Sciences', 'Chemistry', 'Physics & Astronomy'],
    },
  },
  resolve: async (_, { departments }) => {
    const institutions = await db
      .select({ count: count() })
      .from(institutionsTable)

    const projects = await db
      .select({ count: count() })
      .from(projectsTable)
      .where(inArray(projectsTable.department, departments))

    const laboratories = await db
      .select({ count: count() })
      .from(laboratoriesTable)
      .where(inArray(laboratoriesTable.department, departments))

    const researchers = await db
      .select({ count: count() })
      .from(researchersTable)
      .where(inArray(researchersTable.department, departments))

    return {
      institutions: institutions[0].count,
      projects: projects[0].count,
      laboratories: laboratories[0].count,
      researchers: researchers[0].count,
    }
  },
  type: new GraphQLObjectType({
    name: 'DashboardCounts',
    fields: {
      institutions: { type: new GraphQLNonNull(GraphQLInt) },
      projects: { type: new GraphQLNonNull(GraphQLInt) },
      laboratories: { type: new GraphQLNonNull(GraphQLInt) },
      researchers: { type: new GraphQLNonNull(GraphQLInt) },
    },
  }),
}
