# Styling

Styling is what transforms our raw HTML elements and components into the visually appealing and branded user interface of the Task06 application. It defines the layout, colors, typography, and overall look and feel. In this project, we primarily use a few key techniques to apply styles. While we strongly favour using CSS Modules for most of our styling needs due to their benefits in managing styles, this isn't a rigid rule, and other methods like inline styles have their place for specific situations. This section will outline our approach to styling and when to use each method.

## css modules

CSS Modules are our preferred method for writing and managing component-specific styles in Task06. The key advantage of CSS Modules is that they automatically scope the class names they generate to the component they are used in. This effectively prevents style conflicts between different components, even if they use the same class names. This modularity makes our styles more maintainable, easier to reason about, and less prone to unintended side effects as the application grows. When you need to style the structure and appearance of a component, creating a corresponding CSS Module file is the standard approach.

## inline styles

While CSS Modules handle the majority of our component styling, Inline Styles are sometimes used for specific purposes in Task06. Inline styles are CSS rules applied directly to an element using the `style` attribute in JSX. They are typically reserved for dynamic styles that depend directly on JavaScript logic or component state (e.g., dynamically setting a color based on a value, hiding/showing an element, or applying precise positional adjustments). Because they override CSS rules and can make styles harder to manage for complex layouts, we use inline styles sparingly and primarily for simple, conditional, or directly calculated style properties rather than for defining the main structure and theme of a component.
