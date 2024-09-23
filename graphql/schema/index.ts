import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { SearchByNameQuery } from "./queries/search_by_name.js";
import { NodeType } from "./common.js";

const RelationshipType = new GraphQLObjectType({
  name: "Relationship",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    target: { type: new GraphQLNonNull(NodeType) },
  },
});

const Institute = {
  id: { type: new GraphQLNonNull(GraphQLString) },
  name: { type: new GraphQLNonNull(GraphQLString) },
  department: { type: new GraphQLNonNull(GraphQLString) },
  location: {
    type: new GraphQLObjectType({
      name: "Location",
      fields: {
        longitude: { type: GraphQLFloat },
        latitude: { type: GraphQLFloat },
      },
    }),
  },
};

const Laboratory = {
  id: { type: new GraphQLNonNull(GraphQLString) },
  name: { type: new GraphQLNonNull(GraphQLString) },
  department: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: GraphQLString },
  equipment: { type: GraphQLString },
  tags: { type: new GraphQLList(GraphQLString) },
};

const Organisation = {
  id: { type: new GraphQLNonNull(GraphQLString) },
  name: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: new GraphQLNonNull(GraphQLString) },
  address: { type: GraphQLString },
};

const Project = {
  id: { type: new GraphQLNonNull(GraphQLString) },
  name: { type: new GraphQLNonNull(GraphQLString) },
  started_date: { type: new GraphQLNonNull(GraphQLString) },
  finished_date: { type: GraphQLString },
  goals: { type: new GraphQLNonNull(GraphQLString) },
  successful: { type: GraphQLBoolean },
};

/**
 * ===========================================================================
 * ===========================================================================
 * ===========================================================================
 * ===========================================================================
 */

// const InstituteTargetType = new GraphQLObjectType({
//   name: "t_Institute",
//   fields: Institute,
// });

// const LaboratoryTargetType = new GraphQLObjectType({
//   name: "t_Laboratory",
//   fields: Laboratory,
// });

// const OrganisationTargetType = new GraphQLObjectType({
//   name: "t_Organisation",
//   fields: Organisation,
// });

// const ProjectTargetType = new GraphQLObjectType({
//   name: "t_Project",
//   fields: Project,
// });

/**
 * ===========================================================================
 * ===========================================================================
 * ===========================================================================
 * ===========================================================================
 */

const InstituteType = new GraphQLObjectType({
  name: "Institute",
  fields: {
    ...Institute,
    relationships: { type: new GraphQLList(RelationshipType) },
  },
  interfaces: [NodeType],
});

const LaboratoryType = new GraphQLObjectType({
  name: "Laboratory",
  fields: {
    ...Laboratory,
    relationships: { type: new GraphQLList(RelationshipType) },
  },
  interfaces: [NodeType],
});

const OrganisationType = new GraphQLObjectType({
  name: "Organisation",
  fields: {
    ...Organisation,
    relationships: { type: new GraphQLList(RelationshipType) },
  },
  interfaces: [NodeType],
});

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: {
    ...Project,
    relationships: { type: new GraphQLList(RelationshipType) },
  },
  interfaces: [NodeType],
});

/**
 * ===========================================================================
 * ===========================================================================
 * ===========================================================================
 * ===========================================================================
 */

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    searchByName: SearchByNameQuery,
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
  // mutation: [],
  types: [InstituteType, LaboratoryType, OrganisationType, ProjectType],
});
