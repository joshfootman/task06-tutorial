# Charlottes Web

This repository is for learning the technologies used within the Task06 application.

## Introduction

The goal of this repository is for you to get a chance to build a similar application from the ground up. This will allow you to get your hands dirty and achieve a better understanding of the core libraries using within the Task06 application.

You will be doing all work inside the `/ui` directory, making all api calls to the GraphQL server inside the `/graphql` directory.

There are 6 core tasks that you will need to complete and an additional bonus task if you have time. These tasks can be seen [below](#tasks).

All libraries have already been installed inside the UI's `package.json` that you will need to build the application. These libraries can be seen [below](#libraries).

## Data Structure

The following explains the data structure inside Charlottes Web.

### Entities

There are four types of entities:

- Research Project (triangle): A high-level study that a University sector conducts to advance knowledge in a particular field.
- Laboratory (circle): Those facilities, equipment, or tools that support the conduct of Research Projects, either directly or indirectly.
- Researcher (square): A private or public sector individual, company, or business that owns, operates, maintains, or supplies a Laboratory.
- Institution (diamond): Institution where Laboratory or Researcher is affiliated with.

### Relationships

The following explains the relationship structure:

- Research Projects belong to Departments
- Laboratories belong to Departments
- Researchers belong to Departments
- Research Projects can support Research Projects within the same Department
- Laboratories can support Research Projects within the same Department
- Laboratories can have dependencies, redundancies, or be sub-laboratories of other Laboratories within the same Department
- Laboratories can have relationships with Laboratories from other Departments (e.g., sharing resources, collaborating on Research Projects)
- Researchers can own, operate, supply, or maintain Laboratories
- Research Projects and Laboratories can be affiliated with Institutions

## Getting Started

Run the following to get the application started.

> [!NOTE]
> The application was created with the following version of node & npm
> node v22.4.1
> npm v10.8.1

### GraphQL

To run the Apollo GraphQL Server, run the following

```
npm run compile
npm run start
```

### UI

To start the dev server, run the following

```
npm run dev
```

## Libraries

You will interact with the following libraries over the course of this learning

- [mantine](https://mantine.dev/)
- [react-query](https://tanstack.com/query/latest)
- [cytoscape](https://js.cytoscape.org/)
- [openlayers](https://openlayers.org/)
- [jotai](https://jotai.org/)
- [react-router](https://reactrouter.com/6.30.0)

# Tasks

- [Task 1: Create the Root Layout & Router](/tasks/task1.md)
- [Task 2: Create Modals & implement DarkTheme™](/tasks/task2.md)
- [Task 3: Dashboard](/tasks/task3.md)
- [Task 4: Search](/tasks/task4.md)
- [Task 5: Analysis](/tasks/task5.md)
- [Task 6: Create the Form drawer](/tasks/task6.md)
- [Task 7: Bonus](/tasks/task7.md)
