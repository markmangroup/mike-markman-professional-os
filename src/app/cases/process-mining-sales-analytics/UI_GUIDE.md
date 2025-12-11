# Process Mining Case Study - UI Design Guide

## Design Principles

### Contrast & Readability
- **Light Mode**: Use dark text on light backgrounds (e.g., `text-slate-900` on `bg-white`)
- **Dark Mode**: Use light text on dark backgrounds (e.g., `text-white` or `text-gray-200` on `bg-neutral-900`)
- **Minimum Contrast**: Ensure all text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- **Background Patterns**: Keep opacity low (10-20%) to not interfere with readability

### Color System
- **Red**: Problems, warnings, "Before" states (`red-600`, `red-700` in dark mode)
- **Blue**: Solutions, "Impact Needed", positive actions (`blue-600`, `blue-400` in dark mode)
- **Orange/Yellow/Purple**: Process deviations, intermediate states
- **Green**: Success, positive outcomes

## Slide Layout Patterns

### Section Wrapper (for full-slide content)
```tsx
<section className={`relative overflow-hidden rounded-3xl border p-8 shadow-2xl ${
  isDarkMode 
    ? "border-neutral-700 bg-neutral-900" 
    : "border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-100"
}`}>
  {/* Background Pattern - Subtle */}
  <div className={`pointer-events-none absolute inset-0 ${isDarkMode ? "opacity-10" : "opacity-20"}`}>
    {/* radial gradients */}
  </div>
  {/* Content */}
</section>
```

### Card Styling
- **Border**: `border-2` for definition
- **Background**: 
  - Light: `bg-white` or `bg-gray-50`
  - Dark: `bg-neutral-800` or `bg-neutral-900`
- **Shadow**: `shadow-lg` for depth
- **Hover**: `hover:-translate-y-0.5 hover:shadow-md` for interactivity

### Process Deviation Items (Slide 3 pattern)
```tsx
<div className={`flex items-center justify-between rounded-xl border-2 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
  isDarkMode 
    ? "border-red-700/70 bg-red-950/30" 
    : "border-red-300/90 bg-white"
}`}>
  {/* Content with proper text contrast */}
</div>
```

### Pill/Badge Items (Slide 2 pattern)
```tsx
<div className={`flex items-center justify-between rounded-xl border-2 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
  isDarkMode 
    ? "border-red-700/70 bg-red-950/30" 
    : "border-red-300/90 bg-white"
}`}>
  <span className={`text-sm font-semibold ${
    isDarkMode ? "text-red-200" : "text-red-900"
  }`}>
    {label}
  </span>
  <span className={`rounded-full border-2 px-3 py-1 text-xs font-bold shadow-sm ${
    isDarkMode 
      ? "border-red-600/70 bg-red-900/50 text-red-200" 
      : "border-red-400/90 bg-red-100 text-red-800"
  }`}>
    {chip}
  </span>
</div>
```

## Text Contrast Guidelines

### Headings
- **Light Mode**: `text-slate-900` or `text-gray-900`
- **Dark Mode**: `text-white` or `text-gray-100`

### Body Text
- **Light Mode**: `text-slate-600` or `text-gray-700`
- **Dark Mode**: `text-gray-300` or `text-gray-200`

### Muted Text
- **Light Mode**: `text-muted-foreground` or `text-gray-500`
- **Dark Mode**: `text-gray-400`

### Colored Text (Red/Blue/etc.)
- **Light Mode**: `text-red-900`, `text-blue-900` (darker shades)
- **Dark Mode**: `text-red-200`, `text-blue-200` (lighter shades)

## Icon Styling

### Icon Containers
```tsx
<div className={`p-2 rounded-lg ${
  isDarkMode ? "bg-blue-900/50" : "bg-blue-100"
}`}>
  <Icon className={`h-5 w-5 ${
    isDarkMode ? "text-blue-400" : "text-blue-600"
  }`} />
</div>
```

## CardHeader Pattern

### Standard Header
```tsx
<CardHeader className={`border-b py-4 ${
  isDarkMode 
    ? "bg-gradient-to-r from-neutral-800 to-neutral-900 border-neutral-700" 
    : "bg-gradient-to-r from-gray-50 to-gray-100/50"
}`}>
  <CardTitle className={`text-2xl mb-2 ${isDarkMode ? "text-white" : ""}`}>
    {title}
  </CardTitle>
  {/* Optional subtext */}
  {subtext && (
    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
      {subtext}
    </p>
  )}
</CardHeader>
```

## Dark Mode Implementation

### Passing isDarkMode to Slides
Slides array must be a function that receives `isDarkMode`:
```tsx
const getSlides = (isDarkMode: boolean): Slide[] => [
  // slides with isDarkMode available in content
];

const slides = getSlides(isDarkMode);
```

### Conditional Classes Pattern
Always use conditional classes for dark mode:
```tsx
className={`base-classes ${
  isDarkMode ? "dark-mode-classes" : "light-mode-classes"
}`}
```

## Consistency Checklist

- [ ] All text has sufficient contrast in both modes
- [ ] Background patterns don't interfere with readability
- [ ] Cards have proper borders and shadows
- [ ] Hover effects are consistent
- [ ] Icons have proper background containers
- [ ] Pills/badges have readable text
- [ ] Section wrappers use consistent styling
- [ ] Dark mode colors are lighter variants (e.g., `-400` instead of `-600`)


