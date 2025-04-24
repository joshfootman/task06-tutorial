import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql'
import { NodeType } from './common.js'
import { DashboardCountsQuery } from './queries/dashboard_counts.js'
import { FindByIdQuery } from './queries/find_by_id.js'
import { SearchByDepartmentQuery } from './queries/search_by_department.js'
import { SearchByNameQuery } from './queries/search_by_name.js'
import { CreateProjectMutation } from './mutations/create_project.js'
import { EditProjectMutation } from './mutations/edit_project.js'
import { DeleteProjectMutation } from './mutations/delete_project.js'

const RelationshipType = new GraphQLObjectType({
  name: 'Relationship',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    source: { type: new GraphQLNonNull(GraphQLInt) },
    target: { type: new GraphQLNonNull(GraphQLInt) },
    node: { type: new GraphQLNonNull(NodeType) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
    updatedAt: { type: new GraphQLNonNull(GraphQLString) },
  },
})

const Institute = {
  id: { type: new GraphQLNonNull(GraphQLInt) },
  name: { type: new GraphQLNonNull(GraphQLString) },
  city: { type: new GraphQLNonNull(GraphQLString) },
  type: { type: new GraphQLNonNull(GraphQLString) },
  createdAt: { type: new GraphQLNonNull(GraphQLString) },
  updatedAt: { type: new GraphQLNonNull(GraphQLString) },
}

const Project = {
  id: { type: new GraphQLNonNull(GraphQLInt) },
  name: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: new GraphQLNonNull(GraphQLString) },
  startedDate: { type: new GraphQLNonNull(GraphQLString) },
  finishedDate: { type: GraphQLString },
  goal: { type: new GraphQLNonNull(GraphQLString) },
  type: { type: new GraphQLNonNull(GraphQLString) },
  department: { type: new GraphQLNonNull(GraphQLString) },
  createdAt: { type: new GraphQLNonNull(GraphQLString) },
  updatedAt: { type: new GraphQLNonNull(GraphQLString) },
}

const Laboratory = {
  id: { type: new GraphQLNonNull(GraphQLInt) },
  name: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: new GraphQLNonNull(GraphQLString) },
  room: { type: new GraphQLNonNull(GraphQLString) },
  physicalLocation: {
    type: new GraphQLList(
      new GraphQLObjectType({
        name: 'Location',
        fields: {
          latitude: { type: new GraphQLNonNull(GraphQLFloat) },
          longitude: { type: new GraphQLNonNull(GraphQLFloat) },
        },
      })
    ),
  },
  equipment: { type: new GraphQLList(GraphQLString) },
  type: { type: new GraphQLNonNull(GraphQLString) },
  department: { type: new GraphQLNonNull(GraphQLString) },
  createdAt: { type: new GraphQLNonNull(GraphQLString) },
  updatedAt: { type: new GraphQLNonNull(GraphQLString) },
}

const Researcher = {
  id: { type: new GraphQLNonNull(GraphQLInt) },
  name: { type: new GraphQLNonNull(GraphQLString) },
  expertise: { type: new GraphQLNonNull(GraphQLString) },
  position: { type: new GraphQLNonNull(GraphQLString) },
  contactEmail: { type: new GraphQLNonNull(GraphQLString) },
  type: { type: new GraphQLNonNull(GraphQLString) },
  department: { type: new GraphQLNonNull(GraphQLString) },
  createdAt: { type: new GraphQLNonNull(GraphQLString) },
  updatedAt: { type: new GraphQLNonNull(GraphQLString) },
}

const InstituteType = new GraphQLObjectType({
  name: 'Institution',
  fields: {
    ...Institute,
    relationships: { type: new GraphQLList(RelationshipType) },
  },
  interfaces: [NodeType],
})

const LaboratoryType = new GraphQLObjectType({
  name: 'Laboratory',
  fields: {
    ...Laboratory,
    relationships: { type: new GraphQLList(RelationshipType) },
  },
  interfaces: [NodeType],
})

const ResearcherType = new GraphQLObjectType({
  name: 'Researcher',
  fields: {
    ...Researcher,
    relationships: { type: new GraphQLList(RelationshipType) },
  },
  interfaces: [NodeType],
})

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: {
    ...Project,
    relationships: { type: new GraphQLList(RelationshipType) },
  },
  interfaces: [NodeType],
})

/**
 * ===========================================================================
 * ===========================================================================
 * ===========================================================================
 * ===========================================================================
 */

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    searchByName: SearchByNameQuery,
    getByDepartment: SearchByDepartmentQuery,
    getById: FindByIdQuery,
    dashboardCounts: DashboardCountsQuery,
  },
})

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createProject: CreateProjectMutation,
    editProject: EditProjectMutation,
    deleteProject: DeleteProjectMutation,
  },
})

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  types: [InstituteType, LaboratoryType, ResearcherType, ProjectType],
})
