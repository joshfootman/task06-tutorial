# Charlottes Web

This repository is for learning the technologies used within the Task 6 application. The goal here is for you to learn about the libraries used within the UI and give you a chance to get your hands dirty.

## Data Structure

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

## /graphql

Apollo GraphQL Server

### Getting Started

To run the Apollo GraphQL Server, run the following
```
npm run start
```

## /lib

Fake database

## /ui

React + TypeScript Vite Application

### Getting Started

To start the dev server, run the following
```
npm run dev
```

### Libraries

You will interact with the following libraries over the course of this learning
- [mantine](https://mantine.dev/)
- [react-query](https://tanstack.com/query/latest)
- [cytoscape](https://js.cytoscape.org/)
- [openlayers](https://openlayers.org/)
- [jotai](https://jotai.org/)
- [react-router](https://reactrouter.com/6.30.0)

# Tasks

## 1. Create the Root Layout & Router

- [ ] implement root layout
- [ ] implement `createBrowserRouter` with the following routes
  - dashboard (`/`)
  - search (`/search`)
  - analysis (`/analysis`)
    - network (`/analysis/network`)
    - map (`/analysis/map`)
    - table (`/analysis/table`)

## 2. Create Modals & implement DarkTheme™

- [ ] implement settings modal
- [ ] implement dark theme toggle
- [ ] ensure application supports dark theme

## 3. Dashboard

- [ ] implement dashboard filter panel
- [ ] create dashboard query
- [ ] create count widget for each entity

## 4. Search

- [ ] implement search filter panel
- [ ] implement search box
- [ ] implement cards

## 5. Analysis

- [ ] disable analysis navigation unless a user has made a search
- [ ] implement analysis filter panel
- [ ] implement analysis ribbon with segmented control to toggle between views 
- [ ] implement cytoscape
- [ ] implement openlayers
- [ ] implement data table
- [ ] remember the last analysis search when you navigate back to analysis

## 6. Create the Form drawer

- [ ] implement drawer
- [ ] implement form to create project

## 7. Bonus

- [ ] implement the ability to change cytoscape layout
- [ ] implement dynamic clustering on map
- [ ] implement a context menu in analysis to open an edit form

