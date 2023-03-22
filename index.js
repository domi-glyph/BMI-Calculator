//#region variables and DOM queries
let selectedButton = null;
let myBMI = 0;
const genderButtons = document.querySelectorAll(".gender-radio");
const ageSlider = document.getElementById('age-slider');
const ageInput = document.getElementById('age-input');
// const submitBtn = document.querySelector('button[type="submit"]');
const thisForm = document.getElementById('this-form');
const heightValue = document.getElementById("height");
const weightValue = document.getElementById("weight");
const resultSection = document.getElementById("BMI-result");
const BMIResultDOM = document.getElementById("BMI-score");
const BMICategoryDOM = document.getElementById("BMI-category");


//#region default value
ageSlider.value = 18;
ageInput.value = 18;

//#endregion of default value

//update age number input when slider bvalue change
ageSlider.addEventListener("input", () => {
  ageInput.value = ageSlider.value;
})

//update age slider when input age number change
ageInput.addEventListener("input", () => {
  ageSlider.value = ageInput.value;
})

// loop gender choice and attached event listener mouse enter, mouse leave and click
genderButtons.forEach(function(button) {
  //remove all choice to default, apply image change and class hoverselect to currently mouse enter
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

  //event on mouseleave, leave on selection set img hover and class hover select, leave on not selected return to original img and class 
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

  //click event save selection on selectedButton
  button.addEventListener("click", function() {
    selectedButton = button;
  });
});

//calculate BMI function
function calculate({height=150, weight}){
  return weight/((height / 100) ** 2);
}

//form submission
thisForm.addEventListener("submit", function(event){
  event.preventDefault();

  if(heightValue.value > 0 && weightValue.value >0){
    const myBMI = calculate({height: heightValue.value, weight: weightValue.value});

    BMIResultDOM.innerText = myBMI.toFixed(0);

    if(myBMI < 16){
      BMICategoryDOM.innerText = "You are classified as Severe Thinness";
    }else if(myBMI <= 17){
      BMICategoryDOM.innerText = "You are classified as Moderate Thinness";
    }else if(myBMI <= 18.5){
      BMICategoryDOM.innerText = "You are classified as Mild Thinness";
    }else if(myBMI <= 25){
      BMICategoryDOM.innerText = "You are classified as Normal";
    }else if(myBMI <= 30){
      BMICategoryDOM.innerText = "You are classified as Overweight";
    }else if(myBMI <= 35){
      BMICategoryDOM.innerText = "You are classified as Obese Class I";
    }else if(myBMI <=40){
      BMICategoryDOM.innerText = "You are classified as Obese Class II";
    }else{
      BMICategoryDOM.innerText = "You are classified as Obese Class III";
    }
    
    const resultPosition = resultSection.offsetTop;
    window.scrollTo({
      top: resultPosition,
      behavior: "smooth"
    })
  }
})

