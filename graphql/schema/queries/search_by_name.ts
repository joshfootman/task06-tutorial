import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { findByName, formatResponses, randomWait } from "../../../lib/utils.js";
import { NodeType } from "../common.js";

export const SearchByNameQuery: GraphQLFieldConfig<
  any,
  any,
  { term: string; department: string; limit: number }
> = {
  args: {
    term: {
      type: new GraphQLNonNull(GraphQLString),
    },
    department: { type: GraphQLString },
    limit: { type: GraphQLInt, defaultValue: 50 },
  },
  resolve: async (_, { department, limit, term }) => {
    await randomWait();
    const response = findByName(term, limit, department);
    return formatResponses(response);
  },
  type: new GraphQLList(NodeType),
};
