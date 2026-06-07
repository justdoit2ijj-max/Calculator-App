import { state } from "../../state";

export function storeInputValue() {
    const input = document.getElementById('input');
    if (input.value.trim() === "") return;
    state.inputValue = input.value;    
}