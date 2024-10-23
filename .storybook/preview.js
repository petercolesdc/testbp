/** @type { import('@storybook/html').Preview } */

import "../_site/style/style.css";

const preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
