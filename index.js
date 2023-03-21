const ageSlider = document.getElementById('age-slider');
const ageInput = document.getElementById('age-input');

// default value
ageSlider.value = 18;
ageInput.value = 18;

console.log("slider", ageSlider);
console.log("input", ageInput);

ageSlider.addEventListener("input", () => {
  ageInput.value = ageSlider.value;
})

ageInput.addEventListener("input", () => {
  ageSlider.value = ageInput.value;
})