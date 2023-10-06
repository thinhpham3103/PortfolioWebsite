// Hide/show in the About Me section
var tablinks = document.getElementsByClassName("links")
var tabcontents = document.getElementsByClassName("content")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}

// Hide header on scroll
var curY = window.scrollY;
window.onscroll = function(e) {
if(curY < window.scrollY){ // hide header
    document.getElementById("header").style.top = "-80px"; 
} else { // show header
    document.getElementById("header").style.top = "0";
}
    curY = window.scrollY;
}

// Function for side menu for mobile
var sidemenu = document.getElementById("sidemenu");
function openmenu(){ 
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-150px";
}
document.addEventListener('click', function(event) {
    if (sidemenu.contains(event.target))
        closemenu();
});

// Send message from contact from to Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbwhFNevBCmZq4w9OcBLALja2qqq9_grI9e-4qfoD0CL6h33R6x4qQbJ9JIUpB64zlJp/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully! I'll get back to you as soon as possible :)"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})