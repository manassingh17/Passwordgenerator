// const inputSlider = document.querySelector("[data-lengthSlider]");
// const lengthDisplay=document.querySelector("[data-lengthNumber]");
// const passwordDisplay = document.querySelector("[data-passwordDisplay]");
// const copyBtn=document.querySelector("[data-copy]");
// const copyMsg = document.querySelector("[data-copyMsg]");
// const uppercaseCheck=document.querySelector("#uppercase");
// const lowercaseCheck = document.querySelector("#lowercase");
// const symbolsCheck=document.querySelector("#symbols");//fetch by id
// const numbersCheck = document.querySelector("#numbers");
// const indicator=document.querySelector("[data-indicator]");
// const generatedBtn = document.querySelector(".generateButton");
// const allCheckBox=document.querySelectorAll("input[type=checkbox]");
// const symbols=' !@#$%^&*()_+~`-=":;?/><,.';

// let password="";
// let passwordLength=10;
// let checkCount=0;
// //set strength color to grey
//  //total fucntion
//  //copy function
//  //handleslider()->increment password length
//  //generatePassword()
//  //setIndicator()->color and shadow
//  //getRandomInteger(min,max)
//  //getRandomUpperCase()
//  //getRandomLowerCase()
//  //getRandomNumbers()
//  //getRandomSymbol()
//  //calculateStrength()
 
// handleSlider(); 

//  //set password length
//  function handleSlider(){
//     inputSlider.value=passwordLength;
//     lengthDisplay.innerText=passwordLength;
//  } 
//  //using js we can change css using 5 methods
//  //style property ,set attribute, class name  ,css text,class text
 
// function setIndicator(color){
//     indicator.style.backgroundColor=color;
//     //shadow

// }

// function getRndInteger(min,max){
//     Math.floor(Math.random()* (max-min))+min;
// }

// function generateRandomNumber(){
//     return getRndInteger(0,9);
// }
// function generateLowerCase(){
//     return String.fromCharCode(getRndInteger(97,123))
// }
// function generateUpperCase(){
//     return String.fromCharCode(getRndInteger(65,91))
// }
// function generateSymbol(){
//    const randNum= getRndInteger(0,symbols.length);
//    return symbols.charAt[randNum];

// }

// function calculateStrength(){
//     let hasUpper=false;
//     let hasLower=false;
//     let hasNum=false;
//     let hasSym=false;
//     if(uppercaseCheck.checked)hasUpper=true;
//     if(lowercaseCheck.checked)hasUpper=true;
//     if(numbersCheck.checked)hasNum=true;
//     if(symbolsCheck.checked)hasSym=true;
// //.checked is used to check if it is ticked or not
//     if(hasUpper && hasLower && (hasNum || hasSym)&& passwordLength>=8){
//         setIndicator("#0f0")
//     }
//     else if((hasLower || hasUpper)&& (hasNum || hasSym)&& passwordLength>=6){
//         setIndicator("#ff0");
//     }
//     else{
//         setIndicator("0f00");
//     }
// }

// async function copyContent(){
//     //from copying from keyboard
//     //awaitnaviagated.clipboard.writetext.password.display and so on
//     //write text returns promise which is either resolved or not resolved
//     //asynchronous means wait krana chahta hun 
//     //uske liye aync likhna jroori hota
//     //writetext method of clipboard returns a promise->resolve or reject
//     //promise resolve ->then show copied...
//     //therefore use await keyword..pahle kro tb jaunga
//     //navigator.clipboard.writetext--
//     try{
//         await navigator.clipboard.writeText (passwordDisplay.value)
//         copyMsg.innerText="Copied";

//         //htana hai usse kuch der baad
//         //display hidden
//         //z index change
//     }
//     catch(e){
//        copyMsg.innerText="F--ailed"
//     }
//      //to make copy wala span visible
//     copyMsg.classList.add("active");
//     //.add("active ")   class active add ho jaigi...of css
//     setTimeout(()=>{
//         copyMsg.classList.remove("active");
//     },2000);

// } 
    
//    inputSlider.addEventListener('input',(e)=>{
//     passwordLength=e.target.value;
//     handleSlider();

//     //e.target slider ki slide ko darshata
//    });

//    copyBtn.addEventListener('click',()=>{
//     if(passwordDisplay.value){
//         copyContent(); 
//     }
//    });
// function handlecheckboxchange(){
//     checkCount=0;
//     allCheckBox.forEach((checkbox)=>{
//         if(checkbox.checked){
//             checkCount++;
//         }


//         //special case
//         if(passwordLength<checkCount){
//             passwordLength=checkCount;
//             handleSlider();
//         }
//     })  
// }
//   allCheckBox.forEach((checkbox)=>{
//     checkbox.addEventListener('change',handlecheckboxchange);
//   })

//   function shufflePassword(array) {
//     //Fisher Yates Method
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     let str = "";
//     array.forEach((el) => (str += el));
//     return str;
// }
//    generatedBtn.addEventListener('click',()=>{
//     //none of the checkbox is selected
    
//     if(checkCount == 0) 
//         return;
//     if(passwordLength<checkCount){
//         passwordLength=checkCount;
//         handleSlider();
//     } 

//     //lets start journey to find new password
//     console.log("Starting the Journey");
//     password=""

//     //lets put the stuff mentioned by checkboxes

//     // if(uppercaseCheck.checked){
//     //     password+=generateUpperCase();
//     // }
//     // if(lowercaseCheck.checked){
//     //     password+=generateLowerCase();
//     // }
//     // if(numbersCheck.checked){
//     //     password+=generateRandomNumber();
//     // }
//     // if(symbolsCheck.checked){
//     //     password+=generateSymbol();
//     // }
//     let funcArr=[];

//     if(uppercaseCheck.checked){
//         funcArr.push(generateUpperCase());
//     }
//     if(lowercaseCheck.checked){
//         funcArr.push(generateLowerCase());
//     }
//     if(numbersCheck.checked){
//         funcArr.push(generateRandomNumber());
//     }
//     if(symbolsCheck.checked){
//         funcArr.push(generateSymbol());
//     }

  
//      //compulsory addition
//      for(let i=0; i<funcArr.length; i++) {
//         password += funcArr[i]();
//     }
//     console.log("COmpulsory adddition done");

//     //remaining adddition
//     for(let i=0; i<passwordLength-funcArr.length; i++) {
//         let randIndex = getRndInteger(0 , funcArr.length);
//         console.log("randIndex" + randIndex);
//         password += funcArr[randIndex]();
//     }
//   //shufflepassword

//   password=shufflePassword(Array.from(password) );
//   console.log("Shuffling done");
//   //show in ui
//   passwordDisplay.value=password;
//   console.log("UI adddition done");
//   //calculate strength  
//   calculateStrength();

//    });




//babbar code beneath


const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


//initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator("#ccc");
//ste strength circle color to grey


//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    //or kuch bhi karna chahiye ? - HW
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //shadow - HW
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {  
       return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase() {  
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    //special condition
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected

    if(checkCount == 0) 
        return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password
    console.log("Starting the Journey");
    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
    }
    console.log("COmpulsory adddition done");

    //remaining adddition
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex]();
    }
    console.log("Remaining adddition done");
    //shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("Shuffling done");
    //show in UI
    passwordDisplay.value = password;
    console.log("UI adddition done");
    //calculate strength
    calcStrength();
});