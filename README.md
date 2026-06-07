# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). The app lets users perform basic calculations and switch between three visual themes.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the calculator layout adjust based on their device screen size
- Perform addition, subtraction, multiplication, and division
- Delete a single character from the current input
- Reset the calculator input
- Switch between three color themes
- See hover states for interactive elements

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- CSS custom properties for theme tokens
- CSS Grid
- Flexbox
- Mobile-first responsive workflow
- Vanilla JavaScript
- Vite

### What I learned

This project helped me practice combining Tailwind utility classes with custom CSS theme variables. The colors are stored as design tokens, while the layout, spacing, transitions, and responsive behavior are handled mostly through Tailwind classes.

```css
@theme {
  --color-main-background: hsl(222, 26%, 31%);
  --color-secondary-background: hsl(223, 31%, 20%);
  --color-screen-background: hsl(224, 36%, 15%);
}
```

I also worked on switching themes by adding and removing classes on the root HTML element:

```js
document.documentElement.classList.add('light');
document.documentElement.classList.remove('purple');
```

### Continued development

Areas I want to keep improving:

- Replacing `eval()` with a safer calculation parser
- Saving the selected theme in local storage
- Reading the user's first theme from `prefers-color-scheme`
- Improving keyboard support for calculator input

### AI Collaboration

I used AI assistance while refining the project styles, theme colors, responsive behavior, and README structure. The final code decisions were checked against the project files and build output.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
