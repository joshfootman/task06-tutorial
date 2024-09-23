import {
  GraphQLFieldConfig,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import {
  findByDepartment,
  formatResponses,
  randomWait,
} from "../../../lib/utils.js";
import { NodeType } from "../common.js";

export const SearchByNameQuery: GraphQLFieldConfig<
  any,
  any,
  { department: string }
> = {
  args: {
    department: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { department }) => {
    await randomWait();
    const response = findByDepartment(department);
    return formatResponses(response);
  },
  type: new GraphQLList(NodeType),
};
