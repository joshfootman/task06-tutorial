import { describe, it, expect } from 'vitest'
import assert from 'node:assert'
import { ApolloServer } from '@apollo/server'
import { schema } from '../../index'

describe('search by department suite', () => {
  it('returns the correct entities for physics department', async () => {
    const server = new ApolloServer({ schema })

    const response = await server.executeOperation({
      query: `query SearchByDepartment($department: String!) { getByDepartment(department: $department) { id, name, type, ... on Project { relationships { id, type, node { id, name, type } } } ... on Laboratory { relationships { id, type, node { id, name, type } } } ... on Researcher { relationships { id, type, node { id, name, type } } } ... on Institution { relationships { id, type, node { id, name, type } } } } }`,
      variables: { department: 'Physics & Astronomy' },
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data?.getByDepartment).toEqual([
      {
        id: 217,
        name: 'Quantum Computing and Information Science',
        relationships: [
          {
            id: 234,
            node: {
              id: 218,
              name: 'Quantum Hardware Development',
              type: 'PROJECT',
            },
            type: 'PERFORMED_BY',
          },
          {
            id: 235,
            node: {
              id: 219,
              name: 'Quantum Algorithm Design and Complexity',
              type: 'PROJECT',
            },
            type: 'PERFORMED_BY',
          },
          {
            id: 236,
            node: {
              id: 220,
              name: 'Quantum Error Correction and Fault Tolerance',
              type: 'PROJECT',
            },
            type: 'PERFORMED_BY',
          },
        ],
        type: 'PROJECT',
      },
      {
        id: 218,
        name: 'Quantum Hardware Development',
        relationships: [
          {
            id: 239,
            node: {
              id: 224,
              name: 'Quantum Hardware Fabrication Laboratory',
              type: 'LABORATORY',
            },
            type: 'PERFORMED_BY',
          },
        ],
        type: 'PROJECT',
      },
      {
        id: 219,
        name: 'Quantum Algorithm Design and Complexity',
        relationships: [
          {
            id: 240,
            node: {
              id: 225,
              name: 'Quantum Algorithm and Complexity Laboratory',
              type: 'LABORATORY',
            },
            type: 'PERFORMED_BY',
          },
        ],
        type: 'PROJECT',
      },
      {
        id: 220,
        name: 'Quantum Error Correction and Fault Tolerance',
        relationships: [
          {
            id: 241,
            node: {
              id: 226,
              name: 'Quantum Error Correction Laboratory',
              type: 'LABORATORY',
            },
            type: 'PERFORMED_BY',
          },
        ],
        type: 'PROJECT',
      },
      {
        id: 221,
        name: 'Astrophysics and Cosmology',
        relationships: [
          {
            id: 237,
            node: {
              id: 222,
              name: 'Observational Cosmology',
              type: 'PROJECT',
            },
            type: 'PERFORMED_BY',
          },
          {
            id: 238,
            node: {
              id: 223,
              name: 'Theoretical Cosmology',
              type: 'PROJECT',
            },
            type: 'PERFORMED_BY',
          },
        ],
        type: 'PROJECT',
      },
      {
        id: 222,
        name: 'Observational Cosmology',
        relationships: [
          {
            id: 242,
            node: {
              id: 227,
              name: 'Observational Cosmology Laboratory',
              type: 'LABORATORY',
            },
            type: 'PERFORMED_BY',
          },
        ],
        type: 'PROJECT',
      },
      {
        id: 223,
        name: 'Theoretical Cosmology',
        relationships: [
          {
            id: 243,
            node: {
              id: 228,
              name: 'Theoretical Cosmology Laboratory',
              type: 'LABORATORY',
            },
            type: 'PERFORMED_BY',
          },
        ],
        type: 'PROJECT',
      },
      {
        id: 224,
        name: 'Quantum Hardware Fabrication Laboratory',
        relationships: [
          {
            id: 249,
            node: {
              id: 3,
              name: 'University of Cambridge',
              type: 'INSTITUTION',
            },
            type: 'AFFILIATED_WITH',
          },
          {
            id: 244,
            node: {
              id: 229,
              name: 'Dr. Alicia Thornton',
              type: 'RESEARCHER',
            },
            type: 'OWNED_BY',
          },
        ],
        type: 'LABORATORY',
      },
      {
        id: 225,
        name: 'Quantum Algorithm and Complexity Laboratory',
        relationships: [
          {
            id: 250,
            node: {
              id: 1,
              name: 'University of Bristol',
              type: 'INSTITUTION',
            },
            type: 'AFFILIATED_WITH',
          },
          {
            id: 245,
            node: {
              id: 230,
              name: 'Dr. Ben Carter',
              type: 'RESEARCHER',
            },
            type: 'OWNED_BY',
          },
        ],
        type: 'LABORATORY',
      },
      {
        id: 226,
        name: 'Quantum Error Correction Laboratory',
        relationships: [
          {
            id: 251,
            node: {
              id: 4,
              name: 'University of Leeds',
              type: 'INSTITUTION',
            },
            type: 'AFFILIATED_WITH',
          },
          {
            id: 246,
            node: {
              id: 231,
              name: 'Dr. Sarah Mitchell',
              type: 'RESEARCHER',
            },
            type: 'OPERATED_BY',
          },
        ],
        type: 'LABORATORY',
      },
      {
        id: 227,
        name: 'Observational Cosmology Laboratory',
        relationships: [
          {
            id: 252,
            node: {
              id: 2,
              name: 'University of Edinburgh',
              type: 'INSTITUTION',
            },
            type: 'AFFILIATED_WITH',
          },
          {
            id: 247,
            node: {
              id: 232,
              name: 'Prof. John Davies',
              type: 'RESEARCHER',
            },
            type: 'OWNED_BY',
          },
        ],
        type: 'LABORATORY',
      },
      {
        id: 228,
        name: 'Theoretical Cosmology Laboratory',
        relationships: [
          {
            id: 253,
            node: {
              id: 3,
              name: 'University of Cambridge',
              type: 'INSTITUTION',
            },
            type: 'AFFILIATED_WITH',
          },
          {
            id: 248,
            node: {
              id: 233,
              name: 'Dr. Emily Brown',
              type: 'RESEARCHER',
            },
            type: 'OWNED_BY',
          },
        ],
        type: 'LABORATORY',
      },
      {
        id: 229,
        name: 'Dr. Alicia Thornton',
        relationships: [
          {
            id: 254,
            node: {
              id: 3,
              name: 'University of Cambridge',
              type: 'INSTITUTION',
            },
            type: 'AFFILIATED_WITH',
          },
        ],
        type: 'RESEARCHER',
      },
      {
        id: 230,
        name: 'Dr. Ben Carter',
        relationships: [
          {
            id: 255,
            node: {
              id: 1,
              name: 'University of Bristol',
              type: 'INSTITUTION',
            },
            type: 'AFFILIATED_WITH',
          },
        ],
        type: 'RESEARCHER',
      },
      {
        id: 231,
        name: 'Dr. Sarah Mitchell',
        relationships: [
          {
            id: 256,
            node: {
              id: 4,
              name: 'University of Leeds',
              type: 'INSTITUTION',
            },
            type: 'AFFILIATED_WITH',
          },
        ],
        type: 'RESEARCHER',
      },
      {
        id: 232,
        name: 'Prof. John Davies',
        relationships: [
          {
            id: 257,
            node: {
              id: 2,
              name: 'University of Edinburgh',
              type: 'INSTITUTION',
            },
            type: 'AFFILIATED_WITH',
          },
        ],
        type: 'RESEARCHER',
      },
      {
        id: 233,
        name: 'Dr. Emily Brown',
        relationships: [
          {
            id: 258,
            node: {
              id: 3,
              name: 'University of Cambridge',
              type: 'INSTITUTION',
            },
            type: 'AFFILIATED_WITH',
          },
        ],
        type: 'RESEARCHER',
      },
      {
        id: 1,
        name: 'University of Bristol',
        relationships: [],
        type: 'INSTITUTION',
      },
      {
        id: 2,
        name: 'University of Edinburgh',
        relationships: [],
        type: 'INSTITUTION',
      },
      {
        id: 3,
        name: 'University of Cambridge',
        relationships: [],
        type: 'INSTITUTION',
      },
      {
        id: 4,
        name: 'University of Leeds',
        relationships: [],
        type: 'INSTITUTION',
      },
    ])
  })
})
