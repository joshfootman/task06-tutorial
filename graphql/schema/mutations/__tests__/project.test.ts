import { describe, it, expect } from 'vitest'
import assert from 'node:assert'
import { ApolloServer } from '@apollo/server'
import { schema } from '../../index'

describe('project mutation suite', () => {
  it('creates, edits and deletes a project', async () => {
    const server = new ApolloServer({ schema })

    const createResponse = await server.executeOperation({
      query: `mutation CreateProject($name: String!, $description: String, $startedDate: String!, $finishedDate: String, $goal: String!, $department: String!) { createProject(name: $name, description: $description, startedDate: $startedDate, finishedDate: $finishedDate, goal: $goal, department: $department) { id, name } }`,
      variables: {
        name: 'test_project',
        description: 'test_test_test_test_test_test_test_test',
        startedDate: '2022-11-01',
        finishedDate: null,
        goal: 'test project creation is working',
        department: 'Chemistry',
      },
    })

    assert(createResponse.body.kind === 'single')
    expect(createResponse.body.singleResult.errors).toBeUndefined()

    const createProject = createResponse.body.singleResult.data
      ?.createProject as { id: number; name: string }

    expect(createProject.name).toEqual('test_project')

    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    const editResponse = await server.executeOperation({
      query: `mutation EditProject($id: Int!, $description: String, $startedDate: String, $finishedDate: String, $goal: String) { editProject(id: $id, description: $description, startedDate: $startedDate, finishedDate: $finishedDate, goal: $goal) { id, name } }`,
      variables: {
        id: +createProject.id,
        description:
          'newtest_newtest_newtest_newtest_newtest_newtest_newtest_newtest',
        finishedDate: '2025-08-21',
        goal: 'test project update is working',
      },
    })

    assert(editResponse.body.kind === 'single')
    expect(editResponse.body.singleResult.errors).toBeUndefined()

    const editProject = editResponse.body.singleResult.data?.editProject as {
      id: number
      name: string
    }

    expect(editProject.name).toEqual('test_project')

    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    const deleteResponse = await server.executeOperation({
      query: `mutation DeleteProject($id: Int!) { deleteProject(id: $id) { id, name } }`,
      variables: {
        id: +createProject.id,
      },
    })

    assert(deleteResponse.body.kind === 'single')
    expect(deleteResponse.body.singleResult.errors).toBeUndefined()

    const deleteProject = deleteResponse.body.singleResult.data
      ?.deleteProject as { id: number; name: string }

    expect(deleteProject.name).toEqual('test_project')
  })
})
