# CONVERT-1: Selected High-Impact Features Implementation Plan

## Goal
Implement three specific high-impact conversion features to increase user engagement and drive sales enquiries: An ROI Calculator, a 3D Interior Visualizer, and a Lifestyle Neighborhood Explorer.

---

## Selected Features

### 1. 💰 Interactive ROI Calculator
**Psychology**: Rational justification for emotional decision. Turns purchase into an "investment".

**Features**:
- Floating calculator widget or dedicated section on property pages.
- **Inputs**: Down payment slider, Mortgage duration, Interest rate toggles.
- **Outputs**: 
    - Monthly payment estimate.
    - 5-year appreciation projection (based on customisable growth rate).
    - Estimated rental yield.
- **Visuals**: Simple bar or line charts comparing "Buy vs Rent" or "Appreciation over time".

**Implementation Strategy**:
- Create `src/components/ROICalculator.tsx`.
- Use `recharts` or `chart.js` for simple visualizations.
- Add to `LuxuryShowcase` or create a new section.

---

### 2. 🏠 3D Interior Visualizer with Staging
**Psychology**: Ownership visualization. Makes the property feel like THEIRS.

**Features**:
- Interactive image/canvas viewer.
- **Toggle Modes**: 
    - "Empty Shell" vs "Furnished".
    - Style Switching: "Modern Minimalist" vs "Classic Gold".
- **Tech**: React Three Fiber (if full 3D) or Image overlay toggles (for lower latency high-res prototype). *Recommendation for prototype: High-quality layered images for instant load times.*

**Implementation Strategy**:
- Create `src/components/PropertyVisualizer.tsx`.
- Use a base background image and overlay transparent PNGs for furniture sets that fade in/out.

---

### 3. 🗺️ Lifestyle Neighborhood Explorer
**Psychology**: Selling the life, not just the property.

**Features**:
- Interactive map interface.
- **Points of Interest (POI)**: 
    - Luxury Shopping (Dubai Mall, Fashion Avenue).
    - Fine Dining (Michelin star locations).
    - Education (Top international schools).
    - Transport (Helipads, Sheikh Zayed Road access).
- **Interactivity**: Clicking a point shows travel time and a small photo/video tooltip.

**Implementation Strategy**:
- Create `src/components/NeighborhoodExplorer.tsx`.
- Use Mapbox or a stylized static map with interactive SVG pins for a premium custom look (often better than generic Google Maps for luxury).

---

## Implementation Roadmap

1.  **Step 1: ROI Calculator**
    -   Setup Component Structure.
    -   Implement Calculation Logic.
    -   Add Charts/Visuals.
    -   Integrate into Landing Page.

2.  **Step 2: 3D Interior Visualizer**
    -   Curate/Generate Assets (Empty room + furniture layers).
    -   Build Toggle Interface.
    -   Implement Transitions.
    -   Integrate into Landing Page.

3.  **Step 3: Lifestyle Neighborhood Explorer**
    -   Design Map Interface.
    -   Define Data Points (Locations).
    -   Build Interactive Pins & Tooltips.
    -   Integrate into Landing Page.
