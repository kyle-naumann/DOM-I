const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ************MY WORK************


// Nav Links
const navLinks = document.getElementsByTagName('a');
navLinks[0].textContent = siteContent["nav"]["nav-item-1"]
navLinks[1].textContent = siteContent["nav"]["nav-item-2"]
navLinks[2].textContent = siteContent["nav"]["nav-item-3"]
navLinks[3].textContent = siteContent["nav"]["nav-item-4"]
navLinks[4].textContent = siteContent["nav"]["nav-item-5"]
navLinks[5].textContent = siteContent["nav"]["nav-item-6"]

// New Content added to Nav

const newContent = document.createElement("a");
newContent.textContent = "First";
const navPrepend = document.querySelector('nav');
navPrepend.prepend(newContent)

const newContent1 = document.createElement("a")
newContent1.textContent = "Second"
const navAppend = document.querySelector('nav');
navAppend.appendChild(newContent1);

// Nav links color change

const navColor = document.querySelectorAll('a');
navColor.forEach( element => {
  element.style.color = "green"; })

// Top

const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1

const button = document.querySelector('button');
button.textContent = siteContent.cta.button

const headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', "img/header-img.png" )

// Top Main Content

const topH4= document.querySelectorAll('.main-content .top-content .text-content h4');
topH4[0].textContent = siteContent['main-content']["features-h4"]

const pa= document.querySelectorAll('.main-content .top-content .text-content p');
pa[0].textContent = siteContent['main-content']["features-content"]

const topH41= document.querySelectorAll('.main-content .top-content .text-content h4');
topH41[1].textContent = siteContent['main-content']["about-h4"]

const pb= document.querySelectorAll('.main-content .top-content .text-content p');
pb[1].textContent = siteContent['main-content']["about-content"]

// Middile IMAGE

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', "img/mid-page-accent.jpg" )


// Bottom Main Content

const bottomH4= document.querySelectorAll('.main-content .bottom-content .text-content h4');
bottomH4[0].textContent = siteContent['main-content']["services-h4"]

const p1= document.querySelectorAll('.main-content .bottom-content .text-content p');
p1[0].textContent = siteContent['main-content']["services-content"]

const bottomH42= document.querySelectorAll('.main-content .bottom-content .text-content h4');
bottomH42[1].textContent = siteContent['main-content']["product-h4"]

const p2= document.querySelectorAll('.main-content .bottom-content .text-content p');
p2[1].textContent = siteContent['main-content']["product-content"]

const bottomH43= document.querySelectorAll('.main-content .bottom-content .text-content h4');
bottomH43[2].textContent = siteContent['main-content']["vision-h4"]

const p3= document.querySelectorAll('.main-content .bottom-content .text-content p');
p3[2].textContent = siteContent['main-content']["vision-content"]


// Contact section

const contacth4= document.querySelectorAll('.contact h4');
contacth4[0].textContent = siteContent['contact']["contact-h4"]

const p4= document.querySelectorAll('.contact p');
p4[0].textContent = siteContent['contact']["address"]

const p5= document.querySelectorAll('.contact p');
p5[1].textContent = siteContent['contact']["phone"]

const p6= document.querySelectorAll('.contact p');
p6[2].textContent = siteContent['contact']["email"]

// footer

const footer = document.querySelector('footer')
footer.textContent = siteContent.footer.copyright
