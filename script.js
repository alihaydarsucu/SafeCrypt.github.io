let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passwordBox = document.getElementById("passwordBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let generator = document.getElementById("generator");
let copySymbol = document.getElementById("copySymbol");

//İnput Slider and Password Lenght Part
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

generator.addEventListener('click', ()=> {
    passwordBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "'!@#$%^&*()_+~`|}{[]:";

// Funtion for Generating Password
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars  += lowercase.checked ? lowerChars : "";
    allChars  += uppercase.checked ? upperChars : "";
    allChars  += numbers.checked ? allNumbers : "";
    allChars  += symbols.checked ? allSymbols: "";

    if(allChars == "" || allChars.lenght == 0){
        return genPassword;
    }


    let i = 1;
    while(i <= inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}


copySymbol.addEventListener('click', ()=>{
    navigator.clipboard.writeText(passwordBox.value)
});