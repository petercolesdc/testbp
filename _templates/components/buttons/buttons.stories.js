import primaryBtn from "./primary.html";
import secondaryBtn from "./secondary.html";

// -------------------------------------------------------------------
// Set documentation and controller arguments
// -------------------------------------------------------------------

export default {
  title: "Components/Buttons",
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      subtitle: "Press press. Click click. Tap tap.",
      description: {
        component:
          "Styles of buttons, including some options to display variations. These modules focus on style and do not represent a complete set of tags for interactions. Icon swap handling is not handled by this component. Icon shown is to communicate position only.",
      },
    },
  },
  argTypes: {
    id: {
      control: "text",
      description:
        "Set the ID for the button. Useful when using javascript hooks. Consider pairing with the `aria` parameter.",
    },
    label: {
      control: "text",
      description: "Update the text on the button",
    },
    size: {
      options: ["Default", "Small", "Large"],
      control: { type: "radio" },
      description: "Set the size of the button",
    },
    elementType: {
      options: ["link", "button"],
      control: { type: "radio" },
      description: "What type of element is it?",
    },
    hasIcon: {
      control: "boolean",
      description: "Should it have an icon?",
    },
    aria: {
      control: "text",
      description:
        "Set the `aria-controls` parameter if the button is used to control another HTML element. This should match the ID of the element being controlled",
    },
    href: {
      control: "text",
      description: "Link for the button",
      if: {
        arg: "elementType",
        eq: "link",
      },
    },
    isDisabled: { control: "boolean", description: "Disable the button" },
  },
};

// -------------------------------------------------------------------
// Controller for <a href> types
// -------------------------------------------------------------------

const LinkController =
  (htmlSnippet) =>
  ({ id, label, href, size, elementType, isDisabled, aria, hasIcon }) => {
    // Create a container to modify the HTML
    const container = document.createElement("div");
    container.innerHTML = htmlSnippet;

    // Get the original element (either <a> or <button> in the template)
    let element = container.querySelector("a, button");

    // Create a new element depending on elementType
    let newElement;

    // Create based on type selected
    if (elementType === "button") {
      newElement = document.createElement("button");
    } else if (elementType === "link") {
      newElement = document.createElement("a");
    }

    // Copy over attributes (class, id, aria, etc.)
    [...element.attributes].forEach((attr) =>
      newElement.setAttribute(attr.name, attr.value)
    );

    // Preserve inner HTML (including any nested elements)
    newElement.innerHTML = element.innerHTML;

    // Set an ID
    if (id) newElement.id = id;

    // Update the text label only
    if (label) {
      const span = newElement.querySelector("span.label");
      if (span) span.textContent = label;
    }

    // Add or remove the icon from the DOM depening on type
    const iconSpan = newElement.querySelector("span.icon");
    if (hasIcon && iconSpan) {
    } else if (iconSpan) {
      iconSpan.remove();
    }

    // Set href for the link
    if (elementType === "link" && href) {
      newElement.href = href;
    } else {
      newElement.setAttribute("type", "button");
      newElement.removeAttribute("href");
    }

    // Set disabled attributes
    if (isDisabled) {
      newElement.setAttribute("disabled", "disabled");
      newElement.classList.add("opacity-50", "cursor-not-allowed");
    } else {
      newElement.removeAttribute("disabled");
      newElement.classList.remove("opacity-50", "cursor-not-allowed");
    }

    // Set the sizes
    if (size === "Small") {
      newElement.classList.add("text-sm");
      newElement.classList.remove("text-lg");
      newElement.classList.remove("text-base");
    } else if (size === "Large") {
      newElement.classList.add("text-lg");
      newElement.classList.remove("text-sm");
      newElement.classList.remove("text-base");
    } else {
      newElement.classList.add("text-base");
      newElement.classList.remove("text-sm");
      newElement.classList.remove("text-lg");
    }

    // Set aria controls as required
    if (aria) newElement.setAttribute("aria-controls", aria);

    // Replace the original element with the new element in the DOM
    element.replaceWith(newElement);

    // Return the modified HTML content
    return container.innerHTML;
  };

// -------------------------------------------------------------------
// Export buttons by type and set arguments as desired
// -------------------------------------------------------------------

export const Primary = LinkController(primaryBtn).bind({});
Primary.args = {
  id: "",
  label: "Primary button",
  elementType: "link",
  href: "#primary-link",
  size: "Default",
  hasIcon: false,
  aria: "",
  isDisabled: false,
};

Primary.parameters = {
  docs: {
    description: {
      story: "Primary button as a `href` element.",
    },
    canvas: {
      sourceState: "hide",
    },
    primary: true,
  },
};

export const Secondary = LinkController(secondaryBtn).bind({});
Secondary.args = {
  id: "",
  label: "Secondary button",
  elementType: "link",
  href: "#secondary-link",
  size: "Default",
  hasIcon: false,
  aria: "",
  isDisabled: false,
};

Secondary.parameters = {
  docs: {
    description: {
      story: "Secondary button as a `href` element.",
    },
    canvas: {
      sourceState: "hide",
    },
    primary: false,
  },
};
