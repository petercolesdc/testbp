import outlineIcon from "./outline.html";

// -------------------------------------------------------------------
// Set documentation and controller arguments
// -------------------------------------------------------------------

export default {
  title: "Components/Icons/Outline icons",
  parameters: {
    docs: {
      subtitle: "Examples of embedded, accessibile SVG icons",
      description: {
        component:
          "Each SVG should include a `role='img'` tag and a descriptive `<title>` if the context of the usage is not clarifying. Color change function example only. Stick to brand colors.",
      },
    },
  },
  argTypes: {
    color: {
      control: "color",
      description: "Change the icon color",
      defaultValue: "#000000",
    },
  },
};

// -------------------------------------------------------------------
// Story Template to Render the Outline Icon
// -------------------------------------------------------------------

// Function to create a parent wrapper with Tailwind styles
const createParentWrapper = () => {
  const parentWrapper = document.createElement("div");

  // Add Tailwind classes for Flexbox and spacing
  parentWrapper.classList.add("flex", "flex-row", "gap-4", "flex-wrap");

  return parentWrapper;
};

// Template function for rendering components
const IconView = ({ color }) => {
  // Create a container for your HTML snippet
  const container = document.createElement("div");
  container.innerHTML = outlineIcon; // Set the inner HTML from the imported snippet

  // Get all SVG elements from the HTML
  const svgElements = container.querySelectorAll("svg");

  // Check if there are any SVG elements
  if (svgElements.length === 0) return container; // Return container without appending anything

  // Create a parent wrapper using the createParentWrapper function
  const parentWrapper = createParentWrapper();

  // Create a class for set size for each SVG and apply color change
  svgElements.forEach((iconElement) => {
    iconElement.classList.add("w-10", "h-10"); // Adjust size as needed

    // Apply color to the SVG if provided
    if (color) {
      iconElement.style.fill = color;
    }

    // Append the wrapper to the parent wrapper
    parentWrapper.appendChild(iconElement);
  });

  // Return the parent wrapper itself
  return parentWrapper; // Return the parent wrapper
};

// -------------------------------------------------------------------
// Define Individual Stories
// -------------------------------------------------------------------

export const Icons = IconView.bind({});
Icons.args = {
  color: "#000000",
};

Icons.parameters = {};
