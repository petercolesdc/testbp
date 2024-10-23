export default {
  title: "Design System/Typography/Leading",
  argTypes: {
    label: {
      control: "text",
      description: "Set the label for all text at once",
    },
  },
  parameters: {
    docs: {
      subtitle:
        "Utilities for controlling the leading (line height) of an element.",
    },
  },
};

// Helper function to generate spacing boxes with REM values
const generateBoxes = (value, label) => {
  return `
		<div class="flex flex-row gap-3 items-start">
		  <code class="text-sm bg-neutral-10 pl-2" style="width: 10.5rem;">${value}</code>
		  <div class="${value} text-lg" style="width: 100%;">${label}</div>
		</div>
	`;
};
// -------------------------------------------------------------------
// Story: Tailwind leading
// -------------------------------------------------------------------

export const Leading = ({ label = "Default Label for All Sizes" }) => {
  // Define an array of type sizes
  const setValues = [
    { value: "leading-none", label },
    { value: "leading-tight", label },
    { value: "leading-normal", label },
  ];

  // Generate the HTML content dynamically
  let output = "";
  setValues.forEach(({ value, label }) => {
    output += generateBoxes(value, label);
  });

  // Return the final HTML to render
  return `
  <div class="flex flex-col gap-10">
	  ${output}
	  
  </div>`;
};

// -------------------------------------------------------------------
// Export set arguments as desired
// -------------------------------------------------------------------

Leading.args = {
  label:
    "The quick brown fox jumps over the lazy dog. This is a ‘pangram’ – it includes every letter in the alphabet used at least once so it’s useful for seeing how a font looks",
};

Leading.parameters = {
  docs: {
    canvas: {
      sourceState: "none",
    },
  },
};
