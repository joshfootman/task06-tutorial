# Components

Components are the building blocks of our user interface. In modern web development, we break down complex UIs into smaller, reusable, and self-contained pieces. This approach makes our code more organized, easier to understand, and much more maintainable. This section will guide you through working with the components that will form the visual foundation of our Task06 application.

## mantine

[documentation](https://mantine.dev/)

Mantine is our core component library within Task06 and should be the first place you look if you need a component. It's a comprehensive and highly customizable React component library that provides a vast collection of pre-built UI elements and hooks. Leveraging Mantine allows us to build features faster, maintain a consistent look and feel across the application, and benefit from built-in accessibility and performance optimizations. Familiarizing yourself with the Mantine documentation will be invaluable as you develop new parts of the application.

## other

Mantine is incredibly comprehensive, but for the rare occasions where you might need a component that is not included within Mantine's library or is not easily composable using existing Mantine components, you may need to reach for an alternative. In such situations, rather than introducing another fully-styled component library that might clash with our Mantine-based design system, we look to libraries that offer "unstyled primitives." These are fundamental, highly-functional building blocks that come without any default styling. This allows us to use their underlying logic and accessibility features while applying our own styles, ensuring the new component seamlessly integrates with the look and feel established by Mantine within Task06. The following libraries are examples that offer such unstyled primitives to build upon.

### headlessui

[documentation](https://headlessui.com/)

### radix-ui

[documentation](https://www.radix-ui.com/)
