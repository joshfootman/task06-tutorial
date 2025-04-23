# Task 6: Create the Form drawer

![sketch of the form drawer](/assets/task6a.png)
![sketch of the research project create form](/assets/task6b.png)

## Goals

- [ ] implement drawer
- [ ] implement form to create project

## Drawer

- drawer should be opened through the create navigation item
- drawer should show four options to create
  - project
  - laboratory (disabled)
  - researcher (disabled)
  - relationship (disabled)

## Project form

- project form should contain the following inputs
  - name
  - description
  - startedDate
  - finishedDate
  - goal
  - department
- project form should have the following client validation
  - name is required and should be more than 5 characters
  - startedDate is required and should be in the past or current day
  - goal is required and should be more than 10 characters
  - department is required and should be one of the valid departments
- the following server validation should be shown
  - name already exists
- clicking on the edit button in the properties panel should open the form with the corresponding values allowing users to edit
- edit form should also include a button to delete the project
- the corresponding GraphQL mutation should be implemented for each step
  - `createProject`
  - `editProject`
  - `deleteProject`
