import { describe, it, expect } from 'vitest'
import assert from 'node:assert'
import { ApolloServer } from '@apollo/server'
import { schema } from '../../index'

describe('find by id suite', () => {
  it('returns the correct project and relationships', async () => {
    const server = new ApolloServer({ schema })

    const response = await server.executeOperation({
      query: `query FindById($id: Int!) { findById(id: $id) { id, name, type, createdAt, updatedAt, ... on Project { description, startedDate, finishedDate, goal, department, relationships { id, source, target, type, node { id, name, type } } } } }`,
      variables: { id: 10 },
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data?.findById).toEqual({
      createdAt: '2025-04-24 13:19:51',
      department: 'Biological Sciences',
      description:
        'A research project focused on characterizing the gut microbiome composition and its impact on the pathogenesis and progression of inflammatory bowel disease (IBD). This project aims to identify key microbial signatures and potential therapeutic targets.',
      finishedDate: null,
      goal: 'To elucidate the specific roles of different microbial species and their interactions in the development and severity of IBD.',
      id: 10,
      name: 'Investigating the Role of Microbiota in Inflammatory Bowel Disease',
      relationships: [
        {
          id: 54,
          node: {
            id: 11,
            name: 'Microbiome Profiling in IBD Patients',
            type: 'PROJECT',
          },
          source: 10,
          target: 11,
          type: 'PERFORMED_BY',
        },
        {
          id: 55,
          node: {
            id: 12,
            name: 'Functional Analysis of Key Microbial Species in IBD',
            type: 'PROJECT',
          },
          source: 10,
          target: 12,
          type: 'PERFORMED_BY',
        },
      ],
      startedDate: '2023-09-15',
      type: 'PROJECT',
      updatedAt: '2025-04-24 13:19:51',
    })
  })

  it('returns the correct laboratory and relationships', async () => {
    const server = new ApolloServer({ schema })

    const response = await server.executeOperation({
      query: `query FindById($id: Int!) { findById(id: $id) { id, name, type, createdAt, updatedAt, ... on Laboratory { description, room, physicalLocation { latitude, longitude }, equipment, department, relationships { id, source, target, type, node { id, name, type } } } } }`,
      variables: { id: 28 },
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data?.findById).toEqual({
      createdAt: '2025-04-24 13:19:51',
      department: 'Biological Sciences',
      description:
        'Equipped for high-throughput DNA sequencing, microbial culturing, and bioinformatics analysis to study the composition and function of microbial communities.',
      equipment: [
        'Next-generation sequencer (Illumina)',
        'Anaerobic chambers',
        'Real-time PCR system',
        'Bioinformatics workstation',
      ],
      id: 28,
      name: 'Microbiome Analysis Laboratory',
      physicalLocation: [
        {
          latitude: 53.4808,
          longitude: -2.2426,
        },
      ],
      relationships: [
        {
          id: 106,
          node: {
            id: 1,
            name: 'University of Bristol',
            type: 'INSTITUTION',
          },
          source: 28,
          target: 1,
          type: 'AFFILIATED_WITH',
        },
        {
          id: 78,
          node: {
            id: 34,
            name: 'Genomics Core Facility',
            type: 'LABORATORY',
          },
          source: 28,
          target: 34,
          type: 'DEPENDS_ON',
        },
        {
          id: 79,
          node: {
            id: 34,
            name: 'Genomics Core Facility',
            type: 'LABORATORY',
          },
          source: 28,
          target: 34,
          type: 'REDUNDANCY_FROM',
        },
      ],
      room: 'Building A, Room 205',
      type: 'LABORATORY',
      updatedAt: '2025-04-24 13:19:51',
    })
  })

  it('returns the correct researcher and relationships', async () => {
    const server = new ApolloServer({ schema })

    const response = await server.executeOperation({
      query: `query FindById($id: Int!) { findById(id: $id) { id, name, type, createdAt, updatedAt, ... on Researcher { expertise, position, contactEmail, department, relationships { id, source, target, type, node { id, name, type } } } } }`,
      variables: { id: 41 },
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data?.findById).toEqual({
      contactEmail: 'e.vance@example.ac.uk',
      createdAt: '2025-04-24 13:19:51',
      department: 'Biological Sciences',
      expertise: 'Microbial Genomics',
      id: 41,
      name: 'Dr. Eleanor Vance',
      position: 'Principal Investigator',
      relationships: [
        {
          id: 108,
          node: {
            id: 1,
            name: 'University of Bristol',
            type: 'INSTITUTION',
          },
          source: 41,
          target: 1,
          type: 'AFFILIATED_WITH',
        },
        {
          id: 93,
          node: {
            id: 28,
            name: 'Microbiome Analysis Laboratory',
            type: 'LABORATORY',
          },
          source: 41,
          target: 28,
          type: 'OWNED_BY',
        },
      ],
      type: 'RESEARCHER',
      updatedAt: '2025-04-24 13:19:51',
    })
  })

  it('returns the correct institution and relationships', async () => {
    const server = new ApolloServer({ schema })

    const response = await server.executeOperation({
      query: `query FindById($id: Int!) { findById(id: $id) { id, name, type, createdAt, updatedAt, ... on Institution { city, relationships { id, source, target, type, node { id, name, type } } } } }`,
      variables: { id: 1 },
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data?.findById).toEqual({
      city: 'Bristol',
      createdAt: '2025-04-24 13:19:51',
      id: 1,
      name: 'University of Bristol',
      relationships: [],
      type: 'INSTITUTION',
      updatedAt: '2025-04-24 13:19:51',
    })
  })
})
