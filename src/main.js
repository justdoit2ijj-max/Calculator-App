import { state } from "../state";
import { storeInputValue } from "./components/storing";
import { calculateResult } from "./components/calculate";
import { renderUI } from "./components/render";
import { toggleTheme } from "./components/toggleTheme";

const btns = document.querySelectorAll('.btn')
const calculateBtn = document.getElementById('calculate-btn')
const input = document.getElementById("input")
const resetBtn = document.getElementById('reset')
const delBtn = document.getElementById('del-btn')
const toggleBtn = document.getElementById('toggle-btn')

calculateBtn.addEventListener('click', () => {
  storeInputValue();
  const result = calculateResult();
  renderUI(result)
})

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    input.value += btn.dataset.num
  })
})

resetBtn.addEventListener('click', () => {
  input.value = ""
  state.inputValue = null;
})

delBtn.addEventListener('click', () => {
  const newValue = input.value.slice(0, -1);
  input.value = newValue
})

toggleBtn.addEventListener('click', toggleTheme)