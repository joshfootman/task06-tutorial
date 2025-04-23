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

export const DeleteProjectMutation: GraphQLFieldConfig<
  any,
  any,
  {
    id: number
  }
> = {
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: async (_, { id, ...project }) => {
    const result = await db
      .delete(projectsTable)
      .where(eq(projectsTable.id, id))
      .returning({ id: projectsTable.id, name: projectsTable.name })

    return result[0]
  },
  type: new GraphQLObjectType({
    name: 'DeleteProjectResponse',
    fields: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
    },
  }),
}
