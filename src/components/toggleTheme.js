import { state } from "../../state";

export function toggleTheme() {
    const toggleBtn = document.getElementById('toggle-btn')
    const toggleBtnInner = document.getElementById('toggle-btn-inner')
    if (state.theme === "dark") {
        document.documentElement.classList.add('light');
        toggleBtnInner.style.left = "37%"
        toggleBtn.setAttribute('aria-label', 'Switch color theme. Current theme: light')
        state.theme = "light"
    } else if (state.theme === "light") {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('purple')
        toggleBtnInner.style.left = "70%"
        toggleBtn.setAttribute('aria-label', 'Switch color theme. Current theme: purple')
        state.theme = "purple"
    } else if (state.theme === "purple") {
        document.documentElement.classList.remove('purple');
        toggleBtnInner.style.left = ""
        toggleBtn.setAttribute('aria-label', 'Switch color theme. Current theme: dark')
        state.theme = "dark"
    }
}
