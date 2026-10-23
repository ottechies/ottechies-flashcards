# OTTECHIES Flashcards — modular redesign

A dependency-free, offline-first redesign with separate HTML, CSS and JavaScript for the setup, study, and results views. No Tailwind CDN, external fonts, icon CDN, or network request is required.

## Structure

- `index.html` — setup/dashboard view
- `views/study.html` — flip-card study view
- `views/results.html` — results and revision piles
- `css/shared.css` — shared design tokens, header, buttons, light/dark theme variables
- `css/setup.css`, `css/study.css`, `css/results.css` — view-specific styles
- `js/theme.js` — theme toggle (remembers preference in local storage)
- `js/celebration.js` and `css/celebration.css` — optional mastery celebration effect
- `js/setup.js`, `js/study.js`, `js/results.js` — view-specific behavior
- `ism_lecture1.js`, `mis_7102_lecture3.js` — your existing course data files (copy them beside `index.html`)

## Important: restore your course data

The original course-data files were not included among the files available to this build. Copy your original `ism_lecture1.js` and `mis_7102_lecture3.js` files into this folder, next to `index.html`. Keep their current `window.QUIZ_COURSES` data structure. The app expects courses shaped like:

```js
window.QUIZ_COURSES = {
  courseKey: {
    title: "Course title",
    lectures: {
      lectureKey: {
        title: "Lecture title",
        questions: [
          { question: "Question text", answer: "Answer text", rationale: "Optional explanation", topic: "Topic" }
        ]
      }
    }
  }
};
```

If both original files assign the global rather than merge it, ensure the second file adds to the same object instead of overwriting the first. This was already a consideration in the original project.

## Run it

For the most reliable behavior, open this folder in VS Code and use a local static server such as Live Server. It does not need internet access once the files are on your computer. You can also try opening `index.html` directly in your browser.

## Behavior notes

- Light/dark theme choice is remembered.
- The selected deck and progress are kept in `sessionStorage` while navigating between views.
- The existing `celebration.js` file is not required by this initial modular build. It can be re-integrated as a separate optional celebration module after the core views are verified.
- The original course-data files and their questions are not modified by this package.
