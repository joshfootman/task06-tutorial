import { describe, it, expect } from 'vitest'
import assert from 'node:assert'
import { ApolloServer } from '@apollo/server'
import { schema } from '../../index'

describe('search by name suite', () => {
  it('returns a list of entities containing term', async () => {
    const server = new ApolloServer({ schema })

    const response = await server.executeOperation({
      query: `query SearchByName($term: String!, $limit: Int) { searchByName(term: $term, limit: $limit) { id, name, type ... on Project { department } ... on Laboratory { department } ... on Researcher { department } } }`,
      variables: { term: 'facility', limit: 5 },
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data?.searchByName).toEqual([
      {
        department: 'Biological Sciences',
        id: 29,
        name: 'Gene Editing and Cell Engineering Facility',
        type: 'LABORATORY',
      },
      {
        department: 'Biological Sciences',
        id: 34,
        name: 'Genomics Core Facility',
        type: 'LABORATORY',
      },
      {
        department: 'Biological Sciences',
        id: 36,
        name: 'Cell Culture Core Facility',
        type: 'LABORATORY',
      },
      {
        department: 'Biological Sciences',
        id: 37,
        name: 'Protein Analysis Facility',
        type: 'LABORATORY',
      },
      {
        department: 'Biological Sciences',
        id: 39,
        name: 'Environmental Analysis Facility',
        type: 'LABORATORY',
      },
    ])
  })

  it('returns a list of entities containing term for physics department', async () => {
    const server = new ApolloServer({ schema })

    const response = await server.executeOperation({
      query: `query SearchByName($term: String!, $limit: Int, $departments: [String]) { searchByName(term: $term, limit: $limit, departments: $departments) { id, name, type ... on Project { department } ... on Laboratory { department } ... on Researcher { department } } }`,
      variables: {
        term: 'cosm',
        limit: 5,
        departments: ['Physics & Astronomy'],
      },
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data?.searchByName).toEqual([
      {
        department: 'Physics & Astronomy',
        id: 221,
        name: 'Astrophysics and Cosmology',
        type: 'PROJECT',
      },
      {
        department: 'Physics & Astronomy',
        id: 222,
        name: 'Observational Cosmology',
        type: 'PROJECT',
      },
      {
        department: 'Physics & Astronomy',
        id: 223,
        name: 'Theoretical Cosmology',
        type: 'PROJECT',
      },
      {
        department: 'Physics & Astronomy',
        id: 227,
        name: 'Observational Cosmology Laboratory',
        type: 'LABORATORY',
      },
      {
        department: 'Physics & Astronomy',
        id: 228,
        name: 'Theoretical Cosmology Laboratory',
        type: 'LABORATORY',
      },
    ])
  })
})
