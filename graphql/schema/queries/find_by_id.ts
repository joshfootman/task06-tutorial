import { GraphQLFieldConfig, GraphQLNonNull, GraphQLString } from "graphql";
import { findById, formatResponses, randomWait } from "../../../lib/utils.js";
import { NodeType } from "../common.js";

export const FindByIdQuery: GraphQLFieldConfig<any, any, { id: string }> = {
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (_, { id }) => {
    await randomWait();
    const response = findById(id);
    return formatResponses([response])[0];
  },
  type: NodeType,
};
