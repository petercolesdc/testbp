// tailwind-spacing.stories.js

export default {
  title: "Design System/Spacing",
  parameters: {
    docs: {
      subtitle:
        "Customizing the default spacing and sizing scale for your project.",
      description: {
        component:
          "Each box displays Tailwind's default spacing classes, which can be used with `p-*` (padding), `m-*` (margin), or `gap-*` parameters. Note that when using padding or margin, the numbers are cumulative, and each edge can accept a different value. When using `gap` only one value is applied.",
      },
    },
  },
};

// Default Tailwind spacing values and their corresponding REM values
const spacingValues = [
  { value: "0", rem: "0rem" },
  { value: "1", rem: "0.25rem" },
  { value: "2", rem: "0.5rem" },
  { value: "3", rem: "0.75rem" },
  { value: "4", rem: "1rem" },
  { value: "5", rem: "1.25rem" },
  { value: "6", rem: "1.5rem" },
  { value: "8", rem: "2rem" },
  { value: "10", rem: "2.5rem" },
  { value: "12", rem: "3rem" },
  { value: "16", rem: "4rem" },
  { value: "20", rem: "5rem" },
  { value: "24", rem: "6rem" },
  { value: "32", rem: "8rem" },
  { value: "40", rem: "10rem" },
  { value: "48", rem: "12rem" },
  { value: "56", rem: "14rem" },
  { value: "64", rem: "16rem" },
  { value: "72", rem: "18rem" },
  { value: "80", rem: "20rem" },
  { value: "96", rem: "24rem" },
];

// Helper function to generate spacing boxes with REM values
const generateSpacingBoxes = () => {
  return spacingValues
    .map(({ value, rem }) => {
      return `
		<div class="flex flex-row gap-3 items-start">
		  <code class="text-sm bg-neutral-10 text-center" style="width: 4rem;">${value}</code>
		  <div class="bg-blue-light" style="padding-bottom:${rem}; padding-left: 1rem; width:100%;"></div>
		</div>
	`;
    })
    .join("");
};

// Main story
export const SpacingValues = () => {
  return `

	  <div class="grid grid-cols-1 gap-4">
		${generateSpacingBoxes()}
	  </div>
  `;
};

// Default args for the story
SpacingValues.parameters = {
  docs: {
    canvas: {
      // This will remove the "show code" button
      // https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#sourcestate
      sourceState: "none",
    },
  },
};
