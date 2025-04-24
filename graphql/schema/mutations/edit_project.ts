import { eq } from 'drizzle-orm'
import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { db } from '../../drizzle/config'
import { projectsTable } from '../../drizzle/schema'

export const EditProjectMutation: GraphQLFieldConfig<
  any,
  any,
  {
    id: number
    description?: string
    startedDate?: string
    finishedDate?: string
    goal?: string
  }
> = {
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    description: { type: GraphQLString },
    startedDate: { type: GraphQLString },
    finishedDate: { type: GraphQLString },
    goal: { type: GraphQLString },
  },
  resolve: async (_, { id, ...project }) => {
    const result = await db
      .update(projectsTable)
      .set({ ...project })
      .where(eq(projectsTable.id, id))
      .returning({ id: projectsTable.id, name: projectsTable.name })

    return result[0]
  },
  type: new GraphQLObjectType({
    name: 'EditProjectResponse',
    fields: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
    },
  }),
}
