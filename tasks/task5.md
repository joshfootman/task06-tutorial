# Task 5: Analysis

![sketch of the analysis page](/assets/task5a.png)
![sketch of the analysis page with the properties panel open](/assets/task5b.png)

## Goals

- [ ] disable analysis navigation unless a user has made a search
- [ ] implement analysis filter panel
- [ ] implement analysis ribbon with segmented control to toggle between views 
- [ ] implement cytoscape
- [ ] implement openlayers
- [ ] implement data table
- [ ] implement properties panel
- [ ] remember the last analysis search when you navigate back to analysis

## Filter panel

- filter panel should have the title `Analysis Filters`
- filter panel should include a button to reset filters
- filter panel should have the option to filter by department
- department filters should include the icon and name of department
- filter state should be derived from the URL

## Ribbon

- ribbon should exist on all three views
- should contain a way to switch views (network, map or table)

## Network

- render the nodes and relationships
- nodes should have name visible
- relationships should have type visible
- nodes should have the corresponding shape
- nodes should be coloured department colour if possible
- default layout should be `dagre`
- network should have zoom in/out buttons
- network should have a focus button that brings the graph into view

## Map

- map should render the laboratires that have a physical location
- hovering on laboratires should show the name above

## Table

- table should render all entities in a single table

## Properties panel

- clicking on a node or relationship should give it a focused state
- clicking on a node or relationship should open the properties panel on the rhs
- properties panel should include a list of all the properties
- clicking on a relationship should include the source and target entities