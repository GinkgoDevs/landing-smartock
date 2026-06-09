---
name: Smartock Design System
colors:
  surface: '#fcf8ff'
  surface-dim: '#dad8eb'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#efecff'
  surface-container-high: '#e9e6fa'
  surface-container-highest: '#e3e0f4'
  on-surface: '#1a1a28'
  on-surface-variant: '#4d4353'
  inverse-surface: '#2f2f3e'
  inverse-on-surface: '#f2efff'
  outline: '#7f7385'
  outline-variant: '#d0c2d5'
  surface-tint: '#862dcb'
  primary: '#520088'
  on-primary: '#ffffff'
  primary-container: '#7209b7'
  on-primary-container: '#daa9ff'
  inverse-primary: '#e0b6ff'
  secondary: '#006780'
  on-secondary: '#ffffff'
  secondary-container: '#5ed8ff'
  on-secondary-container: '#005c72'
  tertiary: '#522c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#733f00'
  on-tertiary-container: '#f7ad68'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f2daff'
  primary-fixed-dim: '#e0b6ff'
  on-primary-fixed: '#2e004e'
  on-primary-fixed-variant: '#6b00af'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#5bd5fc'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e61'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#ffb877'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6b3b00'
  background: '#fcf8ff'
  on-background: '#1a1a28'
  surface-variant: '#e3e0f4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  code:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system is built to convey intelligence, efficiency, and unwavering reliability for small to medium-sized enterprises (PyMEs). It balances a high-tech SaaS aesthetic with an approachable professional tone, ensuring that complex business data feels manageable and clear. 

The visual style leans into **Corporate Modernism**. It prioritizes clarity through generous whitespace, a structured hierarchy, and subtle depth. By utilizing the vibrant violet from the brand's identity as a primary motivator, the UI feels energetic yet grounded, establishing a sense of "smart management" that modern Argentine businesses can trust for their daily operations.

## Colors
This design system uses a primary **Vivid Violet** derived from the brand logo, serving as the core interactive color. To maintain a professional SaaS look, the interface primarily utilizes a "Light" mode foundation.

- **Primary Violet:** Used for main actions, active states, and brand highlights.
- **Secondary Cyan:** Used sparingly for accent data visualizations or secondary promotional calls-to-action.
- **Neutral Navy:** A deep, professional off-black used for primary text to ensure high readability and a premium feel.
- **Surface Grays:** A series of cool-toned grays (`#F8F9FA`, `#E9ECEF`) are used for dashboard backgrounds and card strokes to prevent visual fatigue.

## Typography
**Inter** is the sole typeface for this design system, chosen for its exceptional legibility in data-heavy environments. 

- **Weight Strategy:** Use `SemiBold (600)` for titles and section headers to provide immediate visual anchors. Use `Medium (500)` for labels and buttons. Use `Regular (400)` for all long-form body text.
- **Scale:** The hierarchy is tight. Large display sizes are reserved for marketing or high-level dashboard summaries, while the core of the experience lives in the `14px` to `16px` range for maximum information density without clutter.
- **Coloring:** Always use the Neutral Navy (`#1E1E2C`) for headings and Medium-Emphasis Gray (`#5F6368`) for secondary body text.

## Layout & Spacing
The layout follows a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. 

- **Rhythm:** An 8px base unit governs all spacing (8, 16, 24, 32, 48, 64). 
- **Density:** Dashboards should utilize a "Comfortable" density with 24px gutters between cards to allow the "clean white" aesthetic to breathe.
- **Alignment:** Content is primarily left-aligned to follow standard Western reading patterns for business tools, with financial figures right-aligned in data tables for easy comparison.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and **Tonal Layering**. 

1.  **Level 0 (Background):** Solid `#F8F9FA`. Used for the main application canvas.
2.  **Level 1 (Cards/Surface):** Pure White `#FFFFFF` with a very soft, diffused shadow (`0px 2px 4px rgba(30, 30, 44, 0.05)`). This is the standard for content containers.
3.  **Level 2 (Dropdowns/Modals):** Pure White with a more pronounced shadow (`0px 10px 20px rgba(30, 30, 44, 0.1)`) to indicate temporary overlays.

Avoid heavy borders; use subtle 1px strokes in `#E9ECEF` only when cards sit on a white background or when defining table rows.

## Shapes
The shape language is defined by **Rounded** corners, creating a modern SaaS feel that avoids the rigidity of sharp corners while remaining professional.

- **Components:** Standard buttons, input fields, and small chips use a `0.5rem (8px)` radius.
- **Containers:** Large dashboard cards and modals use a `1rem (16px)` radius to emphasize them as primary layout blocks.
- **Icons:** Should follow a similar rounded terminal style to match the typography and container language.

## Components
- **Buttons:** Primary buttons use the Brand Violet background with white text. Hover states should darken the violet slightly. Use `padding: 10px 20px` for standard buttons.
- **Input Fields:** Use a white background with a 1px `#D1D5DB` border. On focus, the border should change to Brand Violet with a soft 3px outer glow.
- **Chips/Badges:** Use light tints of the primary color (e.g., 10% opacity Violet) with 100% opacity text for status indicators.
- **Data Tables:** Clean, no vertical borders. Use a subtle `#F8F9FA` background for the header row. Rows should have a subtle hover effect (`#F3F4F6`).
- **Cards:** The workhorse of the UI. Must always include a consistent `24px` internal padding and the Level 1 shadow.
- **Navigation:** A vertical side navigation bar using the Neutral Navy background with Violet active indicators provides a "command center" feel appropriate for a management tool.