//#region variables and DOM queries
let selectedButton = null;
const genderButtons = document.querySelectorAll(".gender-radio");
const ageSlider = document.getElementById('age-slider');
const ageInput = document.getElementById('age-input');
//#endregion of variable and DOM queries

//#region default value
ageSlider.value = 18;
ageInput.value = 18;

//#endregion of default value

ageSlider.addEventListener("input", () => {
  ageInput.value = ageSlider.value;
})

ageInput.addEventListener("input", () => {
  ageSlider.value = ageInput.value;
})

genderButtons.forEach(function(button) {
  button.addEventListener("mouseenter", function() {
    genderButtons.forEach(function(btn) {
      btn.classList.remove("hoverselect");
      const img = btn.querySelector("img");
      img.src = img.src.replace("-hover.png", "-gray.png");
    });

    this.classList.add("hoverselect")
    const img = this.querySelector("img");
    img.src = img.src.replace("-gray.png", "-hover.png");
  });

  button.addEventListener("mouseleave", function() {
    if(this !== selectedButton){
      this.classList.remove("hoverselect")
      const img = this.querySelector("img");
      img.src = img.src.replace("-hover.png", "-gray.png");
    }

    if(selectedButton){
      selectedButton.classList.add("hoverselect");
      const selected_img = selectedButton.querySelector("img");
      selected_img.src = selected_img.src.replace("-gray.png", "-hover.png");
    }
  });

  button.addEventListener("click", function() {
    selectedButton = button;
  });
});