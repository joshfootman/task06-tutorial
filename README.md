# Charlottes Web

This repository is for learning the technologies used within the Task06 application.

## Introduction

The goal of this repository is for you to get a chance to build a similar application from the ground up. This will allow you to get your hands dirty and achieve a better understanding of the core libraries using within the Task06 application.

You will be doing all work inside the `/ui` directory, making all api calls to the GraphQL server inside the `/graphql` directory.

There are 6 core tasks that you will need to complete and an additional bonus task if you have time, make sure you complete these tasks in sequence. The details of these tasks can be found inside the `/tasks` directory.

All libraries have already been installed inside the UI's `package.json` that you will need to build the application. Read through the architecture docuemnts inside `/architecture` directory to get an understanding of how you should be building the application.

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
> The application was tested with the following versions<br/> `node v22.4.1`<br/> `npm v10.8.1`

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

## Architecture

Below you will find links to the core architectural patterns and key technologies we use in the Task06 application. By following this structure throughout the tutorial, you will gain a solid understanding of how the application is organized, how its different parts connect, and the principles that guide our development process. Familiarity with these architectural choices is essential for building features correctly and effectively contributing to the project.

- [Components](/architecture/components.md)
- [Data Fetching](/architecture/data-fetching.md.md)
- [Dates & Times](/architecture/dates-and-times.md)
- [Forms](/architecture/forms.md)
- [Parsing](/architecture/parsing.md)
- [Routing](/architecture/routing.md)
- [State](/architecture/state.md)
- [Styling](/architecture/styling.md)
- [Visualisation](/architecture/visualisation.md)

# Tasks

Below you will find links to the practical tasks designed to guide you through building the Task06 application using the architecture and technologies we've discussed. Each link corresponds to a specific exercise or set of steps where you will apply your knowledge of components, data fetching, routing, state management, styling, and visualisation in a hands-on manner. Work through these tasks by clicking the links below – they are your opportunity to build, practice, and solidify your understanding of the Task06 codebase.

- [Task 1: Create the Root Layout & Router](/tasks/task1.md)
- [Task 2: Create Modals & implement DarkTheme™](/tasks/task2.md)
- [Task 3: Dashboard](/tasks/task3.md)
- [Task 4: Search](/tasks/task4.md)
- [Task 5: Analysis](/tasks/task5.md)
- [Task 6: Create the Form drawer](/tasks/task6.md)
- [Task 7: Bonus](/tasks/task7.md)
