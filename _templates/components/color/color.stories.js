// TailwindColors.stories.js
const colors = require("/styles/tailwind.settings.colors");

export default {
  title: "Design System/Colors",
  parameters: {
    docs: {
      subtitle:
        "Solid color references, including conversions and tailwind classes",
      description: {
        component:
          "Tailwind color classes follow the syntax: `text-{color}`, `bg-{color}`, `border-{color}` to apply to those elements. For gradients, please follow gradient synatax. You should still use the color references.",
      },
    },
  },
};

// ---------------------------------------------------------------------------
// Conversion modes
// ---------------------------------------------------------------------------
function hexToRgba(hex, alpha = 1) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");

  // Parse the hex code
  let r, g, b;

  if (hex.length === 3) {
    // Convert 3-digit hex to 6-digit hex
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    throw new Error(
      "Invalid hex color format. Please provide a valid 3 or 6 digit hex code."
    );
  }

  // Return the RGBA color string
  return `rgba(${r},${g},${b},${alpha})`;
}

function hexToOklch(hex) {
  // Helper function to convert hex to RGB
  const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, "");
    let r, g, b;

    if (hex.length === 3) {
      r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
      g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
      b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else {
      throw new Error(
        "Invalid hex color format. Please provide a valid 3 or 6 digit hex code."
      );
    }

    return [r / 255, g / 255, b / 255];
  };

  // Convert RGB to XYZ
  const rgbToXyz = (r, g, b) => {
    const [x, y, z] = [
      r * 0.4124564 + g * 0.3575761 + b * 0.1804375,
      r * 0.2126729 + g * 0.7151522 + b * 0.072175,
      r * 0.0193339 + g * 0.119192 + b * 0.9503041,
    ];

    return [x, y, z].map((c) => c * 100);
  };

  // Convert XYZ to OKLCH
  const xyzToOklch = (x, y, z) => {
    const Y = y / 100;
    const L = Y <= 0.008856 ? 903.3 * Y : 116 * Math.cbrt(Y) - 16;

    const a = x / 100 - Y * 0.2126;
    const b = z / 100 - Y * 0.0722;

    const C = Math.sqrt(a * a + b * b);
    const h = Math.atan2(b, a) * (180 / Math.PI);

    // Return formatted string "L, C, H"
    return `${L.toFixed(2)}, ${C.toFixed(2)}, ${h < 0 ? h + 360 : h}`;
  };

  // Get RGB values from hex
  const [r, g, b] = hexToRgb(hex);

  // Convert RGB to XYZ
  const [x, y, z] = rgbToXyz(r, g, b);

  // Convert XYZ to OKLCH and return as a formatted string
  return xyzToOklch(x, y, z);
}

// ---------------------------------------------------------------------------
// Recursive function to handle nested color values
// ---------------------------------------------------------------------------

const generateColorBlocks = (colorData, colorGroupName, container) => {
  Object.entries(colorData).forEach(([variant, colorValue]) => {
    if (typeof colorValue === "object") {
      // If the value is an object, recurse into it
      generateColorBlocks(colorValue, `${variant}`, container);
    } else {
      // Create a parent wrapper for each swatch and label
      const wrapperDiv = document.createElement("div");
      wrapperDiv.className = "flex flex-col items-center gap-1"; // Parent wrapper styling

      // Create the color swatch block
      const colorDiv = document.createElement("div");
      colorDiv.className = "border border-neutral-50 h-32 w-full";
      colorDiv.style.backgroundColor = colorValue;

      // Create the color label with color name (excluding "DEFAULT" and "colors")
      const labelName = `${colorGroupName}-${variant}`
        .replace(/colors-/i, "") // Remove "colors" prefix if present
        .replace(/-?DEFAULT/i, ""); // Remove "DEFAULT" and any preceding dash

      // Label the name
      const colorLabel = document.createElement("code");
      colorLabel.textContent = labelName;
      colorLabel.classList.add(
        "text-xs",
        "text-center",
        "bg-neutral-10",
        "w-full",
        "mb-1",
        "p-1"
      );

      // Label the color value
      const colorValueLabel = document.createElement("code");
      colorValueLabel.textContent = colorValue;
      colorValueLabel.classList.add(
        "text-xs",
        "text-center",
        "text-neutral-400"
      );

      // Label the color value as RGBA
      const colorValueLabelRGBA = document.createElement("code");
      colorValueLabelRGBA.textContent = hexToRgba(colorValue);
      colorValueLabelRGBA.classList.add(
        "text-xs",
        "text-center",
        "text-neutral-400"
      );

      // Label the color value as OKLCH
      const colorValueLabelOKLCH = document.createElement("code");
      colorValueLabelOKLCH.textContent =
        "oklch(" + hexToOklch(colorValue) + ")";
      colorValueLabelOKLCH.classList.add(
        "text-xs",
        "text-center",
        "text-neutral-400"
      );

      // Append swatch and label to the wrapper
      wrapperDiv.appendChild(colorDiv);
      wrapperDiv.appendChild(colorLabel);
      wrapperDiv.appendChild(colorValueLabel);
      wrapperDiv.appendChild(colorValueLabelRGBA);
      wrapperDiv.appendChild(colorValueLabelOKLCH);

      // Append wrapper to the main container
      container.appendChild(wrapperDiv);
    }
  });
};

// ---------------------------------------------------------------------------
// Template function for rendering color classes
// ---------------------------------------------------------------------------

const ColorTemplate = () => {
  // Create main container
  const container = document.createElement("div");
  //container.classList.add("space-y-8");

  // Iterate through each color group in colors
  Object.keys(colors).forEach((colorGroup) => {
    const colorGroupData = colors[colorGroup];

    // Create section for each color group
    const colorGroupContainer = document.createElement("div");

    // Flexbox container for color variants
    const colorClassContainer = document.createElement("div");
    colorClassContainer.classList.add(
      "grid",
      "grid-cols-5",
      "gap-y-10",
      "gap-x-5"
    );

    // Generate color blocks for each color group (handle nested structure)
    generateColorBlocks(colorGroupData, colorGroup, colorClassContainer);

    colorGroupContainer.appendChild(colorClassContainer);
    container.appendChild(colorGroupContainer);
  });

  // Return the container with all color groups
  return container;
};

// Define the story
export const ColorClasses = ColorTemplate.bind({});
ColorClasses.storyName = "Palette";
ColorClasses.render = ColorTemplate;

ColorClasses.parameters = {
  docs: {
    canvas: {
      sourceState: "none",
    },
  },
};
