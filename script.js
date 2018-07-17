
    (function() {


        // Shortcut to get elements
        let el = function(element) {
            if (element.charAt(0) === "#") { // If passed an ID...
                return document.querySelector(element); // ... returns single element
            }

            return document.querySelectorAll(element); // Otherwise, returns a nodelist
        };

        //Initial Variables
        let nums = el(".num"),
            ops = el(".ops"),
            screen = el("#screen"),
            plusOrMinus = el("#switch"),
            equals = el("#equal"),
            clearAll = el("#clear-all"),
            clearScreen = el("#clear-screen"),
            firstValue="",
            secondValue="",
            resultValue,
            operator;


        //Click Events for Buttons
        Array.from(nums).forEach(function(element) {
            element.addEventListener('click', setValue);
        });
        Array.from(ops).forEach(function(element) {
            element.addEventListener('click', moveValue);

        });
        plusOrMinus.addEventListener("click", changeSign);
        equals.addEventListener("click", displayValue);
        clearAll.addEventListener("click", cAll);
        clearScreen.addEventListener("click", cScreen);

        //functionality of buttons and calculation
        //Sets first value to the currently pressed button and clears the result.
        //Also updates the screen on click.
        function setValue(){
            if (resultValue){
                firstValue = this.dataset.num;
                resultValue="";
            } else {
                firstValue += this.dataset.num;
            }
            screen.innerHTML = firstValue;
        }
        function moveValue(){
            secondValue = firstValue;
            firstValue ="";
            operator = this.dataset.ops;
        }
        function changeSign(){
            /* Check if firstValue exists and if it does check if +/- and alternate */
            if(firstValue) {
                if (firstValue[0] !== "-"){
                    firstValue = "-" + firstValue;
                    screen.innerHTML = firstValue;
                } else {
                    let clearSymbols = /[0-9]/g;
                    firstValue = firstValue.match(clearSymbols).join('');
                    screen.innerHTML = firstValue;
                }
            }else {
                console.log("Error");
            }
        }
        function displayValue() {
            firstValue = parseFloat(firstValue);
            secondValue = parseFloat(secondValue);
                switch (operator) {
                    case "div":
                        resultValue = secondValue / firstValue;
                        break;
                    case "mul":
                        resultValue = secondValue * firstValue;
                        break;
                    case "sub":
                        resultValue = secondValue - firstValue;
                        break;
                    case "add":
                        resultValue = secondValue + firstValue;
                        break;
                    default:
                        resultValue = firstValue;
                        break;
            }
            if (!isFinite(resultValue)) {
                if (isNaN(resultValue)) {
                    resultValue = "How'd you break this?"
                } else {
                    resultValue = "OH NO, NOT DIVIDING BY ZERO!!!"
                }
            }
            screen.innerHTML = resultValue;
            firstValue = "0";
            secondValue = resultValue;
        }


            function cAll(){
                firstValue ="";
                secondValue="";
                screen.innerHTML = 0;
        }
        function cScreen(){
                firstValue = "";
                screen.innerHTML=0;
        }


    }());