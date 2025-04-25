# Visualisation

Presenting complex data in a clear, intuitive, and interactive way is crucial for user understanding and effective decision-making within Task06. Visualisation is the process of creating graphical representations of data to help users identify patterns, trends, and insights that might be difficult to discern from raw numbers or text alone. Depending on the type of data and the insights we want to convey, we employ different tools and techniques to create compelling visualisations. This section introduces the primary libraries we use for various visualisation needs in the application.

## cytoscape

For visualising complex networks and relationships, we utilize Cytoscape.js. This is a powerful, open-source graph theory library for visualisation and analysis. In Task06, we use Cytoscape to render and interact with graph-based data, such as dependencies between entities or connections within a system. It provides a flexible and performant way to display nodes and edges, apply various layouts, and enable user interaction like zooming, panning, and selecting elements, making it ideal for exploring interconnected data structures.

## openlayers

When dealing with geographical data and maps, OpenLayers is our go-to library. OpenLayers is a high-performance, feature-rich library for creating interactive maps on the web. We use it to display spatial data, overlay different layers of information (like points of interest, boundaries, or sensor data), and provide mapping functionalities such as navigation, zooming, and custom markers. OpenLayers allows us to integrate geographical context into the application, enabling users to visualize data in a spatial dimension.

## react data grid

For presenting tabular data in a structured and interactive format, we use React Data Grid. This is a lightweight yet powerful component designed for displaying large datasets in a spreadsheet-like interface. While not a traditional "visualisation" library in the charting sense, a well-structured and interactive data grid is a form of data presentation that aids analysis. React Data Grid provides features like sorting, filtering, resizing columns, and virtualization to efficiently handle and display significant amounts of tabular data, making it easier for users to browse and understand lists and tables within the application.
