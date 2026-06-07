import { state } from "../../state";

export function toggleTheme() {
    const toggleBtnInner = document.getElementById('toggle-btn-inner')
    if (state.theme === "dark") {
        document.documentElement.classList.add('light');
        toggleBtnInner.style.left = "37%"
        state.theme = "light"
    } else if (state.theme === "light") {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('purple')
        toggleBtnInner.style.left = "70%"
        state.theme = "purple"
    } else if (state.theme === "purple") {
        document.documentElement.classList.remove('purple');
        toggleBtnInner.style.left = ""
        state.theme = "dark"
    }
}