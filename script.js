// Show alert when page loads
alert("Press anywhere on the screen!");

let click = 0;
const buttons = document.querySelectorAll('.box');

// Loop through each button and add a click event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Change only the clicked button
    button.style.backgroundColor = '#c46aff';
    button.textContent = 'happy birthday';
    console.log("clicked");
    click += 1;
    console.log(click);

    if (click === 100) {
      alert("Happy birthday Renette🎁! May God bless you🤝. All your dreams come true✍️. Never give up until you reach your goal🚏.");
      
      // Example: remove 'hide' attribute from ALL buttons
      buttons.forEach(btn => btn.removeAttribute("hide"));

    } else if (click === 598) {
      alert("🎉 Congratulations! You pressed 598 times on the screen. Hope you like it 😁🫂");
    }
  });
});
