export default {
  title: "Design System/Typography/Scale",
  argTypes: {
    label: {
      control: "text",
      description: "Set the label for all text at once",
    },
  },
  parameters: {
    docs: {
      subtitle: "Utilities for controlling the font size of an element.",
      description: {
        component:
          "A visual guide to the available type sizes in Tailwind CSS. From `text-xs` to `text-7xl`",
      },
    },
  },
};

// Helper function to generate a type size preview
const generateTypeSizePreview = (size, label) => {
  return `<div class="flex flex-row gap-5 items-center">
  <code class="text-sm bg-neutral-10 pl-2" style="width: 6.6rem;">${size}</code>
  <div class="${size}" style="width: 100%;">${label}</div>
</div>`;
};

// -------------------------------------------------------------------
// Story: Tailwind Type Sizes
// -------------------------------------------------------------------

export const TypeSizes = ({ label = "Default Label for All Sizes" }) => {
  // Define an array of type sizes
  const typeSizes = [
    { size: "text-xs", label },
    { size: "text-sm", label },
    { size: "text-base", label },
    { size: "text-lg", label },
    { size: "text-xl", label },
    { size: "text-2xl", label },
    { size: "text-3xl", label },
    { size: "text-4xl", label },
    { size: "text-5xl", label },
    { size: "text-6xl", label },
    { size: "text-7xl", label },
  ];

  // Generate the HTML content dynamically
  let output = "";
  typeSizes.forEach(({ size, label }) => {
    output += generateTypeSizePreview(size, label);
  });

  // Return the final HTML to render
  return `
<div class="flex flex-col gap-5">
	${output}
	
</div>`;
};

// -------------------------------------------------------------------
// Export set arguments as desired
// -------------------------------------------------------------------

TypeSizes.args = {
  label: "Just a lazy dog", // Default label for all sizes
};

TypeSizes.parameters = {
  docs: {
    canvas: {
      sourceState: "none",
    },
  },
};
