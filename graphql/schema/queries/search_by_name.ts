import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { findByName, randomWait } from "../../../lib/utils.js";
import { NodeType } from "../common.js";

export const SearchByNameQuery: GraphQLFieldConfig<
  any,
  any,
  { term: string; departments: string[]; limit: number }
> = {
  args: {
    term: {
      type: new GraphQLNonNull(GraphQLString),
    },
    departments: { type: new GraphQLList(GraphQLString) },
    limit: { type: GraphQLInt, defaultValue: 50 },
  },
  resolve: async (_, { departments, limit, term }) => {
    await randomWait();
    return findByName(term, limit, departments);
  },
  type: new GraphQLList(NodeType),
};
