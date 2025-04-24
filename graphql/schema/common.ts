import {
  GraphQLInt,
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'

export const NodeType = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
    updatedAt: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolveType: (value) => {
    if (value.type === 'INSTITUTION') return 'Institution'
    if (value.type === 'PROJECT') return 'Project'
    if (value.type === 'LABORATORY') return 'Laboratory'
    if (value.type === 'RESEARCHER') return 'Researcher'
  },
})
