let input = document.getElementById('inputbox'); //1st i took page of html
let buttons = document.querySelectorAll("button");// i took buttons from page

let string = ""; // i create a inputbox 

let arr = Array.from(buttons);  // ✅ convrt to array tht btns
arr.forEach(button => { //for every each button
    button.addEventListener("click", (e) => { //button listener mean when btn is clicked
        
        let label = e.target.innerHTML; //give every btn listen or reaction a name
        
        if (label === '=') {  // ✅ Fix 2: Use === for strict comparison
            // ✅ Fix 3: Correct Function syntax
            string = Function('return ' + string)();
            input.value = string;
            
        } else if (label === "AC") {
            string = "";
            input.value = string;
            
        } else if (label === "DEL") {
            // ✅ Fix 4: string.length, not just length
            string = string.substring(0, string.length - 1);
            input.value = string;
            
        } else {  // ✅ Fix 5: else { not else (
            string += label;
            input.value = string;
        }
        
    });
});  // ✅ Fix 6: Don't forget to close forEach!