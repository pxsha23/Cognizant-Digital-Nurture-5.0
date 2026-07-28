# Exercise 5 - cohortapp

Style an existing React dashboard that shows ongoing and completed
cohorts, using a CSS Module.

## Steps
1. `npx create-react-app cohortapp` (or restore an existing app with
   `npm install`).
2. Create `src/CohortDetails.module.css`:
   - `.box` → width 300px, `display: inline-block`, 10px margin all
     around, 10px top/bottom padding, 20px left/right padding, 1px
     black border, 10px border radius.
   - `dt` tag selector → `font-weight: 500`.
   - `.ongoing` → green text; `.completed` → blue text.
3. In `CohortDetails.js`, import the CSS Module and apply `styles.box`
   to the container `div`, and switch the `<h3>` cohort-name class
   between `styles.ongoing` and `styles.completed` based on the
   cohort's status.
4. `npm start` and open `http://localhost:3000`.
