import cardTopline from "./topline-static.html";

// Define the story
export default {
  title: "Components/Card/Topline",
  parameters: {
    docs: {
      canvas: {
        sourceState: "hide",
      },
      subtitle: "Simple card with topline over-rule",
      description: {
        component:
          "Basic, non-linked card that displays information of variable content and length. Usually displayed in a `card-deck`",
      },
    },
  },
  argTypes: {
    flagFeatured: {
      control: "boolean",
      description: "If it featured?",
    },
    overlineText: {
      control: "text",
      description: "Text for the overline (beside the flag)",
      defaultValue: "Success story",
    },
    headlineText: {
      control: "text",
      description: "Text for the headline",
      defaultValue:
        "How this brand increased data throughput by 255% and reduced costs by 50%",
    },
    headingLevel: {
      control: {
        type: "select",
      },
      options: ["h2", "h3", "h4", "h5", "h6"], // Allow changing between h2-h6
      description: "Change the heading level",
      defaultValue: "h2",
    },
    descriptionText: {
      control: "text",
      description: "Text for the description",
      defaultValue:
        "Get the Gartner report that provides recommendations to I&O leaders to enable rapid deployment of business services and deploying workloads to the right locations.",
    },
  },
};

// Template function for rendering the HTML dynamically with args
const Controller =
  (htmlSnippet) =>
  ({
    flagFeatured,
    overlineText,
    headlineText,
    headingLevel,
    descriptionText,
  }) => {
    // Create a container to modify the HTML
    const container = document.createElement("div");
    container.innerHTML = htmlSnippet;

    // Get the original element (either <a> or <button> in the template)
    let element = container.querySelector("article");

    // Create a new element depending on elementType
    let newElement;

    newElement = document.createElement("article");

    // Copy over attributes (class, id, aria, etc.)
    [...element.attributes].forEach((attr) =>
      newElement.setAttribute(attr.name, attr.value)
    );

    // Preserve inner HTML (including any nested elements)
    newElement.innerHTML = element.innerHTML;

    // Add or remove feature label
    const featured = newElement.querySelector('[data-role="flag"]');

    if (flagFeatured == true) {
    } else {
      featured.remove();
    }

    // Update the over-line text
    if (overlineText) {
      const span = newElement.querySelector('[data-role="overline"]');
      if (overlineText) span.textContent = overlineText;
    }

    // Update the headline text and level
    const headlineElement = newElement.querySelector('[data-role="headline"]');

    if (headlineElement && headlineText) {
      // Create a new headline element based on the selected heading level
      const newHeadline = document.createElement(headingLevel || "h2");
      newHeadline.setAttribute("data-role", "headline");
      newHeadline.className = headlineElement.className;
      newHeadline.textContent = headlineText;

      // Replace the old headline with the new one
      headlineElement.replaceWith(newHeadline);
    }

    // Update the description text
    if (descriptionText) {
      const span = newElement.querySelector('[data-role="description"]');
      if (descriptionText) span.textContent = descriptionText;
    }

    // Replace the original element with the new element in the DOM
    element.replaceWith(newElement);

    // Return the modified HTML content
    return container.innerHTML;
  };

// Define the individual story using the template
export const topline = Controller(cardTopline).bind({});
topline.args = {
  flagFeatured: false,
  overlineText: "Success story",
  headingLevel: "h2",
  headlineText:
    "How this brand increased data throughput by 255% and reduced costs by 50%",
  descriptionText:
    "Get the Gartner report that provides recommendations to I&O leaders to enable rapid deployment of business services and deploying workloads to the right locations.",
};
