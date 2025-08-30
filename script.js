// Select all buttons with the class 'box'
alert("press anywhere in the screen")



let click=0;
const buttons = document.querySelectorAll('.box');

// Loop through each button and add a click event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // This only affects the button that was clicked
    button.style.backgroundColor = '#c46aff'; // Example: change background color
    button.textContent = 'happy birthday';
    console.log("clicked");
    click+=1  
    console.log(click) // Example: change text
    if(click=== 100) {
    alert("happy birthday renette🎁 may God bless you🤝 all your dreams come true✍️ Never  give up until you reach your goal🚏")
    buttons.removeAttribute("#hide")
    
}else if(click==598){
 alert("🎉congratulations You just have press 598 times on the screen and reached the limit, hope you like it😁🫂")

  });
});

