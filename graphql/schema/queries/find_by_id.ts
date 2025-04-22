import { GraphQLFieldConfig, GraphQLInt, GraphQLNonNull } from "graphql";
import { findById, randomWait } from "../../../lib/utils.js";
import { NodeType } from "../common.js";

export const FindByIdQuery: GraphQLFieldConfig<any, any, { id: number }> = {
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (_, { id }) => {
    await randomWait();
    return findById(id)[0];
  },
  type: NodeType,
};
