const btn = document.getElementById("genPass");
const newPass = document.getElementById("newPass");
const rangeVal = document.getElementById("rangeVal");
const capLet = document.getElementById("capLet");
const smallLet = document.getElementById("smallLet");
const numberStr = document.getElementById("number");
const symbolStr = document.getElementById("symbol");
const copyBtn = document.getElementById("copyPass"); // Copy button

// Display the initial range value
rangeVal.innerText = `length of Password:-${range.value}`;

// Update range value dynamically
range.addEventListener("input", (e) => {
    rangeVal.innerText =  `length of Password:-${e.target.value}`
});



btn.addEventListener("click", () => {
    let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small = "abcdefghijklmnopqrstuvwxyz"; // Fixed typo in "qrrstuvwxyz"
    let number = "0123456789";
    let symbol = "@#$%^&*!~`_-++(}){}[]";
    
    // let finalStr = capital + small + number + symbol; // Combine all character sets
    let finalStr='';
    let a = "";
    if (!capLet.checked && !smallLet.checked && !numberStr.checked && !symbol.checked) {
        console.log("Select at least one choice");
        newPass.innerText = "Please select at least one option!";
        return; // Stop execution if no option is selected
    }
    if(capLet.checked){
        finalStr+=capital;
    }
    if(smallLet.checked){
        finalStr+=small;
    }
    if(numberStr.checked){
        finalStr+=number;
    }
    if(symbolStr.checked){
        finalStr+=symbol;
    }
   

   

    // Fill the remaining length with random characters
    for (let i = 0; i < range.value; i++) {
        // a += random(finalStr);
        let ranNum=Math.floor(Math.random() * finalStr.length)
        a+=finalStr[ranNum];
    }

    

    // Display the password
    newPass.innerText =a})
copyBtn.addEventListener("click", () => {
    if (newPass.innerText !== "") {
        navigator.clipboard.writeText(newPass.innerText)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    }
});
