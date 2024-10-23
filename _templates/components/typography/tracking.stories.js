export default {
  title: "Design System/Typography/Tracking",
  parameters: {
    docs: {
      subtitle:
        "Utilities for controlling the tracking (letter spacing) of an element.",
    },
  },
};

// Helper function to generate spacing boxes with REM values
const generateBoxes = (value, label) => {
  return `
		<div class="flex flex-row gap-3 items-start">
		  <code class="text-sm bg-neutral-10 pl-2" style="width: 11.2rem;">${value}</code>
		  <div class="${value} text-lg" style="width: 100%;">${label}</div>
		</div>
	`;
};
// -------------------------------------------------------------------
// Story: Tailwind leading
// -------------------------------------------------------------------

export const Tracking = ({ label = "Default Label" }) => {
  // Define an array of type sizes
  const setValues = [
    { value: "tracking-tight", label },
    { value: "tracking-normal", label },
    { value: "tracking-wide", label },
    { value: "tracking-xwide", label },
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

Tracking.args = {
  label:
    "The quick brown fox jumps over the lazy dog. This is a ‘pangram’ – it includes every letter in the alphabet used at least once so it’s useful for seeing how a font looks",
};

Tracking.parameters = {
  docs: {
    canvas: {
      sourceState: "none",
    },
  },
};
