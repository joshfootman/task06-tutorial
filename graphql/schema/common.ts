import { GraphQLInterfaceType, GraphQLNonNull, GraphQLString } from "graphql";

export const NodeType = new GraphQLInterfaceType({
  name: "Node",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolveType: (value) => {
    if (value.type === 'INSTITUTION') return 'Institution'
    if (value.type === 'PROJECT') return 'Project'
    if (value.type === 'LABORATORY') return 'Laboratory'
    if (value.type === 'RESEARCHER') return 'Researcher'
  },
});
