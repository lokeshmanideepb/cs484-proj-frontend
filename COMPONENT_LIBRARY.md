# Component Library Reference

## Quick Reference for Common UI Patterns

This document provides copy-paste examples for common UI components following our design system.

---

## Buttons

### Primary Button

```tsx
<button
  className="px-6 py-2.5 bg-primary-600 text-white rounded-xl font-medium 
                   shadow-raised hover:bg-primary-700 hover:shadow-floating 
                   transition-all duration-base transform hover:-translate-y-0.5"
>
  Primary Action
</button>
```

### Secondary Button

```tsx
<button
  className="px-6 py-2.5 bg-neutral-100 text-neutral-700 rounded-xl 
                   font-medium hover:bg-neutral-200 transition-all duration-base"
>
  Secondary Action
</button>
```

### Outline Button

```tsx
<button
  className="px-6 py-2.5 bg-white border-2 border-primary-600 
                   text-primary-600 rounded-xl font-medium 
                   hover:bg-primary-50 transition-all duration-base"
>
  Outline Action
</button>
```

### Danger Button

```tsx
<button
  className="px-6 py-2.5 bg-error text-white rounded-xl font-medium 
                   shadow-raised hover:bg-error-dark hover:shadow-floating 
                   transition-all duration-base transform hover:-translate-y-0.5"
>
  Delete
</button>
```

### Button with Icon

```tsx
<button
  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-600 
                   text-white rounded-xl font-medium shadow-raised 
                   hover:bg-primary-700 hover:shadow-floating 
                   transition-all duration-base"
>
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
  Add Event
</button>
```

---

## Cards

### Basic Card

```tsx
<div
  className="bg-white rounded-2xl shadow-raised hover:shadow-floating 
                border border-neutral-200 p-8 transition-all duration-base 
                hover:-translate-y-1"
>
  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Card Title</h3>
  <p className="text-neutral-600 leading-relaxed">
    Card content goes here with proper spacing and readability.
  </p>
</div>
```

### Card with Icon

```tsx
<div
  className="bg-white rounded-2xl shadow-raised hover:shadow-floating 
                border border-neutral-200 p-8 transition-all duration-base 
                hover:-translate-y-1 group"
>
  <div
    className="w-12 h-12 bg-primary-100 rounded-xl flex items-center 
                  justify-center mb-5 group-hover:bg-primary-200 
                  transition-colors duration-base"
  >
    <svg
      className="w-6 h-6 text-primary-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  </div>
  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Feature Name</h3>
  <p className="text-neutral-600 leading-relaxed">
    Feature description with clear, concise copy.
  </p>
</div>
```

### Card with Image

```tsx
<div
  className="bg-white rounded-2xl shadow-raised hover:shadow-floating 
                border border-neutral-200 overflow-hidden transition-all 
                duration-base hover:-translate-y-1 group"
>
  <div className="relative overflow-hidden h-48">
    <img
      src="/image.jpg"
      alt="Description"
      className="w-full h-full object-cover transform group-hover:scale-105 
                    transition-transform duration-slow"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Card Title</h3>
    <p className="text-neutral-600">Description text</p>
  </div>
</div>
```

---

## Inputs

### Text Input

```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-neutral-700">Label</label>
  <input
    type="text"
    placeholder="Enter text..."
    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 
               rounded-lg text-neutral-900 placeholder-neutral-400
               focus:outline-none focus:border-primary-600 focus:ring-2 
               focus:ring-primary-600/20 transition-all duration-base"
  />
</div>
```

### Textarea

```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-neutral-700">
    Description
  </label>
  <textarea
    rows={4}
    placeholder="Enter description..."
    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 
               rounded-lg text-neutral-900 placeholder-neutral-400
               focus:outline-none focus:border-primary-600 focus:ring-2 
               focus:ring-primary-600/20 transition-all duration-base resize-none"
  />
</div>
```

### Select Dropdown

```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-neutral-700">Category</label>
  <select
    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 
               rounded-lg text-neutral-900 focus:outline-none 
               focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 
               transition-all duration-base cursor-pointer"
  >
    <option>Select an option</option>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>
```

### Checkbox

```tsx
<label className="flex items-center gap-3 cursor-pointer group">
  <input
    type="checkbox"
    className="w-5 h-5 text-primary-600 bg-neutral-50 border-neutral-300 
               rounded focus:ring-2 focus:ring-primary-600/20 
               cursor-pointer transition-all duration-base"
  />
  <span
    className="text-neutral-700 group-hover:text-neutral-900 
                   transition-colors duration-base"
  >
    Checkbox label
  </span>
</label>
```

---

## Badges & Tags

### Status Badge

```tsx
<span
  className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                 font-medium bg-success-light text-success-dark"
>
  Active
</span>
```

### Category Tag

```tsx
<span
  className="inline-flex items-center px-3 py-1 rounded-lg text-sm 
                 font-medium bg-primary-100 text-primary-700 
                 hover:bg-primary-200 transition-colors duration-base"
>
  Technology
</span>
```

### Removable Tag

```tsx
<span
  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg 
                 text-sm font-medium bg-neutral-100 text-neutral-700"
>
  Tag Name
  <button className="hover:text-neutral-900 transition-colors duration-fast">
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</span>
```

---

## Alerts & Notifications

### Success Alert

```tsx
<div
  className="flex items-start gap-3 p-4 bg-success-light border-l-4 
                border-success rounded-lg"
>
  <svg
    className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  <div className="flex-1">
    <p className="font-medium text-success-dark">Success!</p>
    <p className="text-sm text-neutral-700 mt-1">
      Your action was completed successfully.
    </p>
  </div>
</div>
```

### Error Alert

```tsx
<div
  className="flex items-start gap-3 p-4 bg-error-light border-l-4 
                border-error rounded-lg"
>
  <svg
    className="w-5 h-5 text-error flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  <div className="flex-1">
    <p className="font-medium text-error-dark">Error</p>
    <p className="text-sm text-neutral-700 mt-1">
      Something went wrong. Please try again.
    </p>
  </div>
</div>
```

### Warning Alert

```tsx
<div
  className="flex items-start gap-3 p-4 bg-warning-light border-l-4 
                border-warning rounded-lg"
>
  <svg
    className="w-5 h-5 text-warning flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
  <div className="flex-1">
    <p className="font-medium text-warning-dark">Warning</p>
    <p className="text-sm text-neutral-700 mt-1">
      Please review this information carefully.
    </p>
  </div>
</div>
```

---

## Loading States

### Spinner

```tsx
<div className="flex items-center justify-center">
  <div
    className="animate-spin rounded-full h-12 w-12 border-4 
                  border-primary-600 border-t-transparent"
  ></div>
</div>
```

### Spinner with Text

```tsx
<div className="text-center">
  <div
    className="inline-block animate-spin rounded-full h-12 w-12 border-4 
                  border-primary-600 border-t-transparent mb-4"
  ></div>
  <p className="text-neutral-600 text-lg font-medium">Loading...</p>
</div>
```

### Skeleton Card

```tsx
<div
  className="bg-white rounded-2xl shadow-raised border border-neutral-200 p-8 
                animate-pulse"
>
  <div className="h-4 bg-neutral-200 rounded w-3/4 mb-4"></div>
  <div className="h-4 bg-neutral-200 rounded w-full mb-2"></div>
  <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
</div>
```

---

## Empty States

### Empty State

```tsx
<div className="text-center py-20">
  <div
    className="w-24 h-24 bg-neutral-200 rounded-full flex items-center 
                  justify-center mx-auto mb-6"
  >
    <svg
      className="w-12 h-12 text-neutral-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
  </div>
  <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
    No Items Found
  </h3>
  <p className="text-neutral-600 mb-6">
    Get started by creating your first item
  </p>
  <button
    className="px-6 py-2.5 bg-primary-600 text-white rounded-xl 
                     font-medium shadow-raised hover:bg-primary-700 
                     hover:shadow-floating transition-all duration-base"
  >
    Create Item
  </button>
</div>
```

---

## Modals

### Modal Overlay

```tsx
<div
  className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm z-50 
                flex items-center justify-center p-4"
>
  <div
    className="bg-white rounded-2xl shadow-modal max-w-lg w-full p-8 
                  transform transition-all duration-base"
  >
    {/* Modal Header */}
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-neutral-900">Modal Title</h2>
      <button
        className="text-neutral-500 hover:text-neutral-700 
                         transition-colors duration-base"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    {/* Modal Content */}
    <div className="mb-6">
      <p className="text-neutral-600 leading-relaxed">
        Modal content goes here with clear messaging and proper spacing.
      </p>
    </div>

    {/* Modal Actions */}
    <div className="flex gap-3 justify-end">
      <button
        className="px-6 py-2.5 bg-neutral-100 text-neutral-700 rounded-xl 
                         font-medium hover:bg-neutral-200 transition-all duration-base"
      >
        Cancel
      </button>
      <button
        className="px-6 py-2.5 bg-primary-600 text-white rounded-xl 
                         font-medium shadow-raised hover:bg-primary-700 
                         hover:shadow-floating transition-all duration-base"
      >
        Confirm
      </button>
    </div>
  </div>
</div>
```

---

## Navigation

### Breadcrumbs

```tsx
<nav className="flex items-center gap-2 text-sm">
  <Link
    to="/"
    className="text-neutral-600 hover:text-primary-600 
                         transition-colors duration-base"
  >
    Home
  </Link>
  <svg
    className="w-4 h-4 text-neutral-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
  <Link
    to="/events"
    className="text-neutral-600 hover:text-primary-600 
                                transition-colors duration-base"
  >
    Events
  </Link>
  <svg
    className="w-4 h-4 text-neutral-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
  <span className="text-neutral-900 font-medium">Event Details</span>
</nav>
```

### Tabs

```tsx
<div className="border-b border-neutral-200">
  <nav className="flex gap-6">
    <button
      className="px-4 py-3 text-primary-600 font-medium border-b-2 
                       border-primary-600 transition-colors duration-base"
    >
      Tab 1
    </button>
    <button
      className="px-4 py-3 text-neutral-600 hover:text-neutral-900 
                       font-medium border-b-2 border-transparent 
                       hover:border-neutral-300 transition-all duration-base"
    >
      Tab 2
    </button>
    <button
      className="px-4 py-3 text-neutral-600 hover:text-neutral-900 
                       font-medium border-b-2 border-transparent 
                       hover:border-neutral-300 transition-all duration-base"
    >
      Tab 3
    </button>
  </nav>
</div>
```

---

## Pagination

### Full Pagination

```tsx
<div className="flex items-center justify-between">
  <div className="text-sm text-neutral-600">
    Page <span className="font-semibold text-neutral-900">1</span> of{" "}
    <span className="font-semibold text-neutral-900">10</span>
  </div>

  <div className="flex items-center gap-2">
    <button
      className="px-4 py-2 bg-white border border-neutral-300 
                       text-neutral-700 rounded-lg hover:bg-neutral-50 
                       hover:border-primary-600 hover:text-primary-600 
                       transition-all duration-base"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <button
      className="min-w-[40px] h-10 px-3 bg-primary-600 text-white 
                       rounded-lg font-medium shadow-raised"
    >
      1
    </button>
    <button
      className="min-w-[40px] h-10 px-3 bg-white border border-neutral-300 
                       text-neutral-700 rounded-lg hover:bg-neutral-50 
                       hover:border-primary-600 hover:text-primary-600 
                       transition-all duration-base"
    >
      2
    </button>

    <button
      className="px-4 py-2 bg-white border border-neutral-300 
                       text-neutral-700 rounded-lg hover:bg-neutral-50 
                       hover:border-primary-600 hover:text-primary-600 
                       transition-all duration-base"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</div>
```

---

## Tooltips (Utility Classes)

```tsx
<button className="relative group">
  Click me
  <span
    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 
                   bg-neutral-900 text-white text-sm rounded-lg opacity-0 
                   group-hover:opacity-100 transition-opacity duration-base 
                   pointer-events-none whitespace-nowrap"
  >
    Tooltip text
  </span>
</button>
```

---

## Layout Containers

### Page Container

```tsx
<div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
  <div className="container mx-auto px-6 py-20">
    <div className="max-w-5xl mx-auto">{/* Content */}</div>
  </div>
</div>
```

### Section

```tsx
<section className="py-20">
  <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-neutral-900 mb-12 text-center">
        Section Title
      </h2>
      {/* Section content */}
    </div>
  </div>
</section>
```

---

## Usage Tips

1. **Always include transitions**: Add `transition-all duration-base` for smooth interactions
2. **Use semantic colors**: primary for brand, success/error/warning for states
3. **Maintain elevation hierarchy**: raised → floating → overlay → modal
4. **Round corners generously**: Use xl (12px) or 2xl (16px) for modern feel
5. **Add hover effects**: Transform + shadow changes indicate interactivity
6. **Space consistently**: Use 4, 6, 8 multiples for padding/margins
7. **Test accessibility**: Ensure proper contrast and focus states

---

_Component Library v1.0 - January 2026_
