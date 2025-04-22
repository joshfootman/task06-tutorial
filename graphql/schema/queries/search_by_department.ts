import {
  GraphQLFieldConfig,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import {
  findByDepartment,
  randomWait
} from "../../../lib/utils.js";
import { NodeType } from "../common.js";

export const SearchByDepartmentQuery: GraphQLFieldConfig<
  any,
  any,
  { department: string }
> = {
  args: {
    department: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, { department }) => {
    await randomWait();
    return findByDepartment(department);
  },
  type: new GraphQLList(NodeType),
};
