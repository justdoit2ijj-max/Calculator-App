import { state } from "../../state"

export function calculateResult() {
    if (!state.inputValue) return "";

    try {
        const result = Function(`"use strict"; return (${state.inputValue})`)();
        return Number.isFinite(result) ? result : "Error";
    } catch {
        return "Error";
    }
}
