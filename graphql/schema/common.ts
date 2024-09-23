import { GraphQLInterfaceType, GraphQLNonNull, GraphQLString } from "graphql";

export const NodeType = new GraphQLInterfaceType({
  name: "Node",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolveType: (value) => {
    if (`location` in value) return "Institute";
    if (`equipment` in value) return "Laboratory";
    if (`started_date` in value) return "Project";
    return `Organisation`;
  },
});
