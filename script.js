(function (){
    "use strict";
let el = (element) => {
    if (element.charAt(0) === "#"){
        //checks for id
        return document.querySelector(element);
        //returns an element
    } else {
        return document.querySelectorAll(element);
        //returns a node list
    }
};







// click events
    for (let i = 0, l = nums.length; i < l; i++) {
        nums[i].onclick = setScreen();
    }

}());