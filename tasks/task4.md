# Task 4: Search

![sketch of the search page](/assets/task4.png)

## Goals

- [ ] implement search filter panel
- [ ] implement search box
- [ ] implement cards

## Filter panel

- filter panel should have the title `Search Filters`
- filter panel should include a button to reset filters
- filter panel should have the option to filter by department
- department filters should include the icon and name of department
- filter state should be derived from the URL

## Search box

- if the user is searching return 10 results in a table
- search table should include the following
  - id
  - entity type as an icon
  - name
  - department
- search state should be derived from the URL
- clicking on a result should navigate to analysis
- search should use the `searchByName` GraphQL query

## Cards

- cards should be present by default
- clicking a card should navigate to analysis
- cards should include
  - title
  - icon
- the following cards should implemented
  - entities by department
