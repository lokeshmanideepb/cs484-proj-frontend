# UIC Events - Design System Documentation

## Overview

This design system is built on the CEO's core design philosophy emphasizing natural color perception, thoughtful visual hierarchy, and refined user interactions.

---

## Core Design Principles

### 1. **Color Philosophy**

Based on the CEO's guidance, our color system follows these principles:

#### Blue-Shifted Neutrals

- **Rationale**: Pure grays (#d1d1d1) appear unnatural. Blue-shifted grays (#d1d3d5) feel more organic and easier on the eyes.
- **Implementation**: All neutral colors have a subtle blue undertone for a more sophisticated, natural appearance.

```
neutral-50:  #fafbfc  - Slightly blue-tinted white
neutral-100: #f4f6f8  - Very light blue-gray
neutral-200: #e8ecf0  - Light blue-gray (our #d1d3d5 equivalent)
neutral-300: #d1d5db  - Medium-light blue-gray
...continuing through neutral-900
```

#### Avoid Pure Black

- Never use `#000000` for text
- Use `neutral-900` (#111827) instead - a very dark blue-gray
- Context-aware: darker shades for headings, lighter for body text

#### HSLuv Color Space Principles

While we use hex in Tailwind config, our color selections follow HSLuv principles:

- Consistent perceived brightness across hues
- More natural color transitions
- Better color harmony

---

### 2. **Z-Axis Thinking**

Elements are conceptualized as existing above or below a surface:

#### Shadow System

```
shadow-raised:   Elements slightly above the surface
shadow-floating: Elements floating with noticeable elevation
shadow-overlay:  Prominent overlays like modals
shadow-modal:    Maximum elevation for critical UI
```

#### The Metaphor

- **Above elements**: Lighter, cast shadows downward
- **Below elements**: Darker, receive shadows
- **Interaction**: Hover states lift elements (translateY)

Example in EventCard:

```tsx
hover:shadow-floating hover:-translate-y-0.5
```

---

### 3. **Strategic Opacity**

Use opacity thoughtfully:

- Backdrop overlays: `bg-neutral-900/50 backdrop-blur-sm`
- Disabled states: `opacity-50`
- Subtle backgrounds: `bg-primary-600/10`

Never use high opacity on important interactive elements.

---

### 4. **Context-Aware Design**

Colors and contrasts must make sense in context:

#### Text on Backgrounds

- White/light backgrounds → Dark text (neutral-900, neutral-700)
- Dark backgrounds → Light text (white, neutral-50)
- Colored backgrounds → Consider contrast ratios (WCAG AA minimum)

#### Button States

```tsx
// Primary button shows clear hierarchy
bg - primary - 600; // Default
hover: bg - primary - 700; // Darker on hover
shadow - raised; // Elevated
hover: shadow - floating; // More elevation on hover
```

---

## Typography System

### Font Stack

```css
font-sans:
  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
  Arial, sans-serif;
```

**Rationale**: Native system fonts for better performance and familiar feel

### Hierarchy

```
text-6xl: 60px  - Hero headlines
text-5xl: 48px  - Page titles
text-4xl: 36px  - Major sections
text-3xl: 30px  - Section headers
text-2xl: 24px  - Subsections
text-xl:  20px  - Large body
text-lg:  18px  - Emphasized body
text-base: 16px - Standard body
text-sm:  14px  - Small text
text-xs:  12px  - Captions
```

### Weight Scale

- **300 (Light)**: Hero text, large display
- **400 (Normal)**: Body text
- **500 (Medium)**: Emphasized text, navigation
- **600 (Semibold)**: Subheadings, buttons
- **700 (Bold)**: Headings

### Line Heights

- Headings: 1.25 (tight)
- Body text: 1.625 (relaxed)
- UI elements: 1.5 (normal)

---

## Color Palette

### Primary (Brand Blue)

```
primary-50:  #eff6ff  - Backgrounds
primary-100: #dbeafe  - Subtle highlights
primary-500: #3b82f6  - Standard usage
primary-600: #2563eb  - Primary buttons (most common)
primary-700: #1d4ed8  - Hover states
```

### Accent Colors

```
coral:  #ff6b6b - Warnings, highlights
teal:   #20c997 - Success, confirmations
purple: #6f42c1 - Special features
amber:  #ffc107 - Alerts, attention
```

### Semantic Colors

```
success: #10b981 - Completed actions
warning: #f59e0b - Caution
error:   #ef4444 - Errors, destructive actions
info:    #3b82f6 - Informational messages
```

---

## Spacing System

Based on 8px grid:

```
space-1:  4px   - Tiny gaps
space-2:  8px   - Base unit
space-3:  12px  - Small spacing
space-4:  16px  - Standard spacing
space-6:  24px  - Medium spacing
space-8:  32px  - Large spacing
space-12: 48px  - Extra large
space-16: 64px  - Section spacing
```

**Usage Pattern**:

- Internal padding: 4, 6, 8
- Card padding: 6, 8
- Section spacing: 12, 16, 20

---

## Component Patterns

### Cards

```tsx
<div className="bg-white rounded-2xl shadow-raised hover:shadow-floating
                transition-all duration-base hover:-translate-y-1
                border border-neutral-200 p-8">
```

**Key Features**:

- Rounded corners (2xl = 16px) for friendly feel
- Raised shadow for elevation
- Subtle border for definition
- Hover transforms: lift + enhanced shadow
- Blue-shifted white background

### Buttons

#### Primary Button

```tsx
<button className="px-6 py-2.5 bg-primary-600 text-white rounded-xl
                   font-medium shadow-raised hover:bg-primary-700
                   hover:shadow-floating transition-all duration-base
                   transform hover:-translate-y-0.5">
```

#### Secondary Button

```tsx
<button className="px-6 py-2.5 bg-neutral-100 text-neutral-700
                   rounded-xl font-medium hover:bg-neutral-200
                   transition-all duration-base">
```

### Inputs

```tsx
<input
  className="px-4 py-2.5 bg-neutral-50 border border-neutral-300 
                  rounded-lg focus:outline-none focus:border-primary-600 
                  focus:ring-2 focus:ring-primary-600/20 
                  transition-all duration-base"
/>
```

**Focus States**: Ring with 20% opacity for subtle but clear indication

---

## Animation & Transitions

### Timing Functions

```css
cubic-bezier(0.4, 0, 0.2, 1)  /* All transitions */
```

**Rationale**: Smooth, natural easing that feels responsive

### Duration Scale

```
fast:   150ms - Micro-interactions
base:   200ms - Standard (most common)
slow:   300ms - Emphasized changes
slower: 500ms - Major transitions
```

### Transform Patterns

#### Hover Lift

```tsx
hover: -translate - y - 1; // Card lift
hover: -translate - y - 0.5; // Button lift
```

#### Scale

```tsx
hover: scale - 105; // Image zoom in cards
```

#### Translate

```tsx
group-hover:translate-x-1 // Arrow shifts on hover
```

---

## Accessibility

### Contrast Ratios

- Normal text: Minimum 4.5:1 (WCAG AA)
- Large text (18px+): Minimum 3:1
- UI components: Minimum 3:1

### Focus States

All interactive elements have visible focus indicators:

```css
focus:outline-none
focus:ring-2
focus:ring-primary-600
focus:ring-offset-2
```

### Reduced Motion

Respects user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Information Architecture

### Page Structure

```
Header (Fixed)
├─ Logo + Brand
├─ Navigation
└─ User/Auth

Content (Scrollable)
├─ Hero/Title Section
├─ Main Content
│  ├─ Cards/Lists
│  └─ Detailed Views
└─ Actions/Pagination

Footer (Optional)
```

### Visual Hierarchy

1. **Hero/Title**: Largest text, bold, primary color accents
2. **Section Headers**: 2-3 levels smaller, bold
3. **Body Content**: Base size, relaxed line-height
4. **Meta Info**: Smaller, muted color
5. **Actions**: Prominent buttons, clear CTAs

---

## Responsive Design

### Breakpoints

```
sm:  640px   - Small tablets
md:  768px   - Tablets
lg:  1024px  - Desktop
xl:  1280px  - Large desktop
2xl: 1536px  - Extra large
```

### Mobile-First Patterns

```tsx
// Mobile default
className="text-2xl p-4"

// Tablet+
className="text-2xl md:text-4xl p-4 md:p-8"

// Desktop
className="text-2xl md:text-4xl lg:text-5xl
           p-4 md:p-8 lg:p-12"
```

### Container Widths

```tsx
<div className="container mx-auto px-6">
  <div className="max-w-5xl mx-auto">
    {/* Content constrained for readability */}
  </div>
</div>
```

---

## Best Practices

### Do's ✅

1. **Use blue-shifted grays** for all neutral elements
2. **Apply shadows** to show elevation and hierarchy
3. **Transform on hover** to indicate interactivity
4. **Round corners** generously (xl, 2xl) for modern feel
5. **Space generously** - don't cram elements
6. **Test contrast** - ensure readability
7. **Consistent transitions** - use duration-base everywhere

### Don'ts ❌

1. **Don't use pure black** (#000000) for text
2. **Don't use pure gray** (#808080) - add blue tint
3. **Don't mix timing functions** - stick to cubic-bezier
4. **Don't over-animate** - subtle is better
5. **Don't ignore focus states** - accessibility matters
6. **Don't use small border-radius** on large cards
7. **Don't stack too many shadows** - maintain clarity

---

## Implementation Examples

### Full Page Layout

```tsx
<div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
  <Header />

  <main className="container mx-auto px-6 py-20">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-neutral-900 mb-6">Page Title</h1>

      <div className="grid gap-6">{/* Cards */}</div>
    </div>
  </main>
</div>
```

### Event Card Pattern

```tsx
<article
  className="bg-white rounded-2xl shadow-raised hover:shadow-floating 
                    border border-neutral-200 overflow-hidden 
                    transition-all duration-base hover:-translate-y-0.5 group"
>
  {/* Image with overlay effect */}
  <div className="relative overflow-hidden">
    <img
      className="w-full transform group-hover:scale-105 
                    transition-transform duration-slow"
    />
  </div>

  {/* Content with hierarchy */}
  <div className="p-8">
    <h2
      className="text-3xl font-bold text-neutral-900 mb-3
                   group-hover:text-primary-600 transition-colors"
    >
      Title
    </h2>
    <p className="text-neutral-600 leading-relaxed">Description</p>
  </div>
</article>
```

---

## Design Tokens Reference

All tokens are defined in:

- `src/styles/designSystem.ts` - TypeScript constants
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global CSS variables

---

## Maintenance & Evolution

### When to Update

1. **New component patterns** - Document thoroughly
2. **Color additions** - Ensure they follow blue-shift principle
3. **Spacing changes** - Maintain 8px grid
4. **Animation updates** - Keep timing consistent

### Testing Checklist

- [ ] Contrast ratios meet WCAG AA
- [ ] Focus states are visible
- [ ] Reduced motion respected
- [ ] Mobile responsive
- [ ] Hover states clear
- [ ] Loading states defined
- [ ] Error states handled

---

## Resources

- **Color Theory**: HSLuv color space (CEO guidance)
- **Accessibility**: WCAG 2.1 Level AA
- **Performance**: System fonts, optimized animations
- **Inspiration**: LUMA screenshots (experiential reference)

---

_Last Updated: January 2026_  
_Based on CEO's design philosophy from Twitter threads_
