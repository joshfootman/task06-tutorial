# Charlottes Web

This repository is for learning the technologies used within the Task 6 application.

Data within Charlottes Web can take one of four forms

- Institute
- Laboratory
- Organisation
- Projects

![data](/assets/data.png)

Relations between data can be seen in the following image
![relationships](/assets/relationships.png)

## /graphql

Apollo GraphQL Server

## /lib

Fake database

## /ui

React + TypeScript Vite Application

### Tasks

1. Implement a basic root structure similar to the image below

- There should be 3 sections, the navigation bar, the filter panel and the page
- This should be visible on all pages
- There will be 6 items in the nav-bar (3 at the top, 3 at the bottom)
  - top
    - dashboard
    - search
    - analysis (this should be disabled by default until a search has been made, at that point, navigating here should remember the last valid query)
  - bottom
    - create
    - help
    - settings
- the filter panel will have unique filters per page
  - dashboard
    - department
  - search
    - department
  - analysis
    - department
- filters should be a list of checkboxes that have the icon next to the name

![general structure](/assets/general_structure.png)

2. Implement the search page

- There should be an input at the top where you can type, this should call the `searchByName` graphql query
- results should be shown in a table
- results should show the following
  - icon of shape with the correct department stroke
  - id
  - name
  - type of node
  - department (if valid)
- clicking a row should navigate you to analysis in the network view, you should also be able to choose to navigate to the map or table first if you want
- By default, a number of cards should be visible on the search page (one for each department)
- Clicking a card should navigate you to analysis in the network view
  ![search default structure](/assets/search_default.png)
  ![search after input](/assets/search_input.png)

3. Implement the analysis page

- depending on whether a user clicked a card or typed a name, you should call `searchByDepartment` or `findById` respectively
- the analysis view should have 3 views
  - network (cytoscape)
  - map (openlayers)
  - table (up to you)
- the analysis page is broken into 3 elements, the ribbon at the top, the properties panel that is conditionally rendered and the page
- use the `findById` graphql query to get the data for when the properties panel is opened
- the network should show all data, the map only data that has a valid location, and the table should also show all data (merge all four types of data into a single table)
- the ribbon should contain actions that change depending on view
  - analysis
    - change layout between dagre & concentric
  - map
    - a button that zooms to downing street 🤷
  - table
    - the ability to hide columns

![analysis structure](/assets/analysis.png)

4. Implement the dashboard page

- TODO
  ![dashboard structure](/assets/dashboard.png)
