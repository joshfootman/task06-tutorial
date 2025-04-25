# State

In any interactive application, managing State is fundamental. State refers to the data that changes over time and influences what is displayed to the user and how the application behaves. This includes everything from whether a modal is open, to the data fetched from an API, to the current values in a form. Effectively managing state is crucial for building dynamic and responsive user interfaces. In Task06, we have a tiered approach to state management, prioritizing different methods based on the nature and scope of the state. We favour storing state in the URL when appropriate, then using React's built-in state management, and finally, resorting to a global state library only when necessary.

Our preference order of state is URL > React State > Jotai.

## url state

Storing state directly in the URL (Uniform Resource Locator) is our most favoured approach for certain types of application state in Task06. State managed in the URL is reflected in the browser's address bar. This is particularly useful for state that defines the current view or configuration of a page, such as filters, sorting options, pagination, or active tabs. The primary benefit is that URL state is easily shareable (users can bookmark or send links to specific application views) and persists across page reloads. By reading state directly from the URL, components can render correctly based on the current address, making the application's state more predictable and debuggable.

## react state

React State refers to the state managed directly within functional components using hooks like `useState` and `useReducer`. This is the next preferred method for managing state that is local to a single component or a small group of closely related components. For example, the open/closed state of a dropdown menu, the value of a simple input field before submission, or the loading state of a specific button are good candidates for React's local state. It's straightforward to implement and understand for component-specific concerns. We favour it over global state for localized data to keep components self-contained and reduce unnecessary complexity in our global state tree.

## jotai

For managing Global State – data that needs to be accessed and shared by many components across different parts of the application, often without a direct parent-child relationship – we use Jotai. Jotai is a minimalist state management library that provides a flexible and performant way to share state using atomic units. We reach for Jotai only when state truly needs to be global and cannot be effectively managed via URL state or passed down through component props (React State). While powerful for sharing complex state across the application, we use it judiciously to avoid over-complicating our state architecture.
