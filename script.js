let words = document.querySelectorAll(".text");
words.forEach((text) => {
    let letters = text.textContent.split("");
    text.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        text.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=> {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {

        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind"
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);
//toggle icon navibar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animation');
        }
        else{
            sec.classList.remove('show-animation'); 
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    //remove toggle icon and navbar when clicking on nav bar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //Animationfooter
    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animation',this.innerHeight+this.scrollY >= document.scrollingElement.scrollHeight);
}

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const subject = document.getElementById("subject");
const mess = document.getElementById("massage");

function sendEmail(){
    const bodyMassage = `Full Name : ${fullName.value}<br> Email:${email.value}<br>
    Mobile Number:${mobile.value}<br> Massage:${mess.value}`;

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nayab.ijs@gmail.com",
    Password : "E31BDD62C4FECE0CCE16F4AEB7A26EEE78F0",
    To : 'nayab.ijs@gmail.com',
    From : "nayab.ijs@gmail.com",
    Subject : subject.value,
    Body : bodyMassage
}).then(
  message => alert(message)
);
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    sendEmail();
});