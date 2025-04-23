import {
  GraphQLFieldConfig,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { db } from '../../drizzle/config'
import { idTable, projectsTable } from '../../drizzle/schema'

export const CreateProjectMutation: GraphQLFieldConfig<
  any,
  any,
  {
    name: string
    description?: string
    startedDate: string
    finishedDate?: string
    goal: string
    department: 'Biological Sciences' | 'Chemistry' | 'Physics & Astronomy'
  }
> = {
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    startedDate: { type: new GraphQLNonNull(GraphQLString) },
    finishedDate: { type: GraphQLString },
    goal: { type: new GraphQLNonNull(GraphQLString) },
    department: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, project) => {
    const id_result = await db
      .insert(idTable)
      .values({ table: 'projects' })
      .returning({ id: idTable.id })

    const result = await db
      .insert(projectsTable)
      .values({ ...project, type: 'PROJECT', id: id_result[0].id })
      .returning({ id: projectsTable.id, name: projectsTable.name })

    return result[0]
  },
  type: new GraphQLObjectType({
    name: 'CreateProjectResponse',
    fields: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
    },
  }),
}
