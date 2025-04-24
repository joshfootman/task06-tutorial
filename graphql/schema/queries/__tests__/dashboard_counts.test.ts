import { describe, it, expect } from 'vitest'
import assert from 'node:assert'
import { ApolloServer } from '@apollo/server'
import { schema } from '../../index'

describe('dashboard counts suite', () => {
  it('returns the correct counts without filters', async () => {
    const server = new ApolloServer({ schema })

    const response = await server.executeOperation({
      query: `query DashboardCounts { dashboardCounts { institutions, projects, laboratories, researchers } }`,
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data?.dashboardCounts).toEqual({
      institutions: 9,
      laboratories: 28,
      projects: 38,
      researchers: 28,
    })
  })

  it('returns the correct counts for biology', async () => {
    const server = new ApolloServer({ schema })

    const response = await server.executeOperation({
      query: `query DashboardCounts($departments: [String]) { dashboardCounts(departments: $departments) { institutions, projects, laboratories, researchers } }`,
      variables: { departments: ['Biological Sciences'] },
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data?.dashboardCounts).toEqual({
      institutions: 9,
      laboratories: 13,
      projects: 18,
      researchers: 13,
    })
  })

  it('returns the correct counts for chemistry & physics', async () => {
    const server = new ApolloServer({ schema })

    const response = await server.executeOperation({
      query: `query DashboardCounts($departments: [String]) { dashboardCounts(departments: $departments) { institutions, projects, laboratories, researchers } }`,
      variables: { departments: ['Chemistry', 'Physics & Astronomy'] },
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data?.dashboardCounts).toEqual({
      institutions: 9,
      laboratories: 15,
      projects: 20,
      researchers: 15,
    })
  })
})
