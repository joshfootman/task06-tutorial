import { GraphQLFieldConfig, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { dashboardCounts, randomWait } from "../../../lib/utils.js";

export const DashboardCountsQuery: GraphQLFieldConfig<any, any, { departments: string[] }> = {
  args: {
    departments: { type: new GraphQLList(GraphQLString) },
  },
  resolve: async (_, { departments }) => {
    await randomWait();
    return dashboardCounts(departments)
  },
  type: new GraphQLObjectType({
    name: "DashboardCounts",
    fields: {
      institutions: { type: new GraphQLNonNull(GraphQLInt) },
      projects: { type: new GraphQLNonNull(GraphQLInt) },
      laboratories: { type: new GraphQLNonNull(GraphQLInt) },
      researchers: { type: new GraphQLNonNull(GraphQLInt) },
    }
  }),
};
