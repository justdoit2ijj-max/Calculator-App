import { state } from "../../state"

export function calculateResult() {
    const result = eval(state.inputValue)
    return result
}