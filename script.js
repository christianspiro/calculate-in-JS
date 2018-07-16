
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
            firstValue="",
            secondValue="",
            resultValue;


        //Click Events for Buttons
        Array.from(nums).forEach(function(element) {
            element.addEventListener('click', buttonsNum);
        });
        Array.from(ops).forEach(function(element) {
            element.addEventListener('click', buttonsOps);

        });
        //functionality of buttons and triggering other events
        function buttonsOps() {
                switch (this.dataset.ops) {
                    case "switch":
                        console.log("switch");
                        break;
                    case "div":
                        console.log("divide");
                        break;
                    case "mul":
                        console.log("multiply");
                        break;
                    case "sub":
                        console.log("subtract");
                        break;
                    case "add":
                        console.log("fucking add christ");
                        break;
                    case "deci":
                        console.log("decimal");
                        break;
                    case "=":
                        console.log("equals");
                        break;
                    case "AC":
                        console.log("all clear");
                        break;
                    case "C":
                        console.log("clear screen");
                        break;
                    default:
                        break;
            }
        }
        function buttonsNum(){

        }
        function calc(){

        }


    }());