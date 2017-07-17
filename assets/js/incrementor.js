var incrementElement = document.getElementById("increment");

// if count gets reset somehow, change this value to the value you need and refresh the page
var count = 0;

//if the count is stored in local storage, this displays that value on the screen
//if not, it will set it to the count value above
if (localStorage.getItem("count")) {
    incrementElement.textContent = localStorage.getItem("count");
} else {
    incrementElement.textContent = count;
}

//this function increments the count variable as well as the count value in local storage
//and updates the count on the screen
function increment() {
    if (!localStorage.getItem("count")) {
        console.log("no count in local storage found");
        localStorage.setItem("count", count);
    } else {
        count = localStorage.getItem("count");
        count++;
        localStorage.setItem("count", count);
        incrementElement.textContent = count;
    }
}

//any key press will call the increment function
document.onkeypress = increment;


//if you need to change the value, and it's not working, clear the local storage in the browser