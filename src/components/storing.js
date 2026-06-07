import { state } from "../../state";

export function storeInputValue() {
    const input = document.getElementById('input');
    if (input.value.trim() === "") {
        state.inputValue = null;
        return;
    }
    state.inputValue = input.value;    
}
