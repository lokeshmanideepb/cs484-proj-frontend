/**
 * UIC Events Design System
 *
 * Based on CEO's design philosophy:
 * - Blue-shifted grays for natural appearance
 * - HSLuv color space principles for perceived consistency
 * - Thoughtful z-axis positioning (above/below metaphor)
 * - Avoid pure black, use context-aware colors
 * - Strategic use of opacity and shadows
 */

export const designSystem = {
  // Color Palette - Blue-shifted neutrals for more natural feel
  colors: {
    // Base neutrals (blue-shifted as per CEO guidance)
    neutral: {
      50: "#fafbfc", // Slightly blue-tinted white
      100: "#f4f6f8", // Very light blue-gray
      200: "#e8ecf0", // Light blue-gray (#d1d3d5 philosophy)
      300: "#d1d5db", // Medium-light blue-gray
      400: "#9ba3af", // Medium blue-gray
      500: "#6b7280", // Base blue-gray
      600: "#4b5563", // Dark blue-gray (instead of pure black)
      700: "#374151", // Darker blue-gray
      800: "#1f2937", // Very dark blue-gray
      900: "#111827", // Near-black with blue tint
    },

    // Primary brand colors - vibrant but balanced
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6", // Main brand blue
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },

    // Accent colors - for CTAs and highlights
    accent: {
      coral: "#ff6b6b",
      teal: "#20c997",
      purple: "#6f42c1",
      amber: "#ffc107",
    },

    // Semantic colors
    success: {
      light: "#d1f4e0",
      base: "#10b981",
      dark: "#059669",
    },
    warning: {
      light: "#fff3cd",
      base: "#f59e0b",
      dark: "#d97706",
    },
    error: {
      light: "#fee2e2",
      base: "#ef4444",
      dark: "#dc2626",
    },
    info: {
      light: "#dbeafe",
      base: "#3b82f6",
      dark: "#2563eb",
    },
  },

  // Typography system
  typography: {
    fonts: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },

    sizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
    },

    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    lineHeights: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },

  // Spacing system (8px base)
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
  },

  // Elevation system - following z-axis metaphor
  // "Above" elements are lighter, "below" elements cast shadows
  elevation: {
    flat: {
      shadow: "none",
      background: "neutral.50",
    },
    raised: {
      shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      background: "white",
    },
    floating: {
      shadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      background: "white",
    },
    overlay: {
      shadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      background: "white",
    },
    modal: {
      shadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      background: "white",
    },
  },

  // Border radius
  radius: {
    none: "0",
    sm: "0.125rem", // 2px
    base: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  // Transitions
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    slower: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Opacity values for layering
  opacity: {
    disabled: "0.5",
    hover: "0.8",
    active: "0.9",
    subtle: "0.6",
  },

  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

// Component-specific design tokens
export const components = {
  // Card styling following elevation principles
  card: {
    default: {
      background: designSystem.colors.neutral[50],
      border: designSystem.colors.neutral[200],
      shadow: designSystem.elevation.raised.shadow,
      radius: designSystem.radius.xl,
      padding: designSystem.spacing[6],
    },
    hover: {
      shadow: designSystem.elevation.floating.shadow,
      transform: "translateY(-2px)",
      transition: designSystem.transitions.base,
    },
  },

  // Button styling
  button: {
    primary: {
      background: designSystem.colors.primary[600],
      backgroundHover: designSystem.colors.primary[700],
      color: "#ffffff",
      shadow: designSystem.elevation.raised.shadow,
      radius: designSystem.radius.lg,
    },
    secondary: {
      background: designSystem.colors.neutral[100],
      backgroundHover: designSystem.colors.neutral[200],
      color: designSystem.colors.neutral[700],
      shadow: "none",
      radius: designSystem.radius.lg,
    },
  },

  // Input styling - subtle, context-aware
  input: {
    background: designSystem.colors.neutral[50],
    border: designSystem.colors.neutral[300],
    borderFocus: designSystem.colors.primary[500],
    text: designSystem.colors.neutral[900],
    placeholder: designSystem.colors.neutral[400],
    radius: designSystem.radius.md,
  },
};

export default designSystem;
