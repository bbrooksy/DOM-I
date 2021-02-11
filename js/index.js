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

const navItems = document.querySelectorAll("nav a")
for(let i = 0; i < navItems.length; i++){
  navItems[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`]
}



let ctaImage = document.getElementById("cta-img")
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])
const ctaHeader = document.querySelector(".cta-text h1")
ctaHeader.innerHTML = siteContent["cta"]["h1"]
const ctaButton = document.querySelector(".cta-text button")
ctaButton.innerHTML = siteContent["cta"]["button"]


const headIt = document.querySelectorAll(".text-content h4")
for(let i = 0; i < headIt.length; i++){
 if(i === 0){
   headIt[i].innerHTML = siteContent["main-content"]["features-h4"]
 }
 else if(i === 1){
  headIt[i].innerHTML = siteContent["main-content"]["about-h4"]
 }
 else if(i === 2){
  headIt[i].innerHTML = siteContent["main-content"]["services-h4"]
 }
 else if(i === 3){
  headIt[i].innerHTML = siteContent["main-content"]["product-h4"]
 }
 else if(i === 4){
  headIt[i].innerHTML = siteContent["main-content"]["vision-h4"]
 }
}
const bodIt = document.querySelectorAll(".text-content p")
for(let i = 0; i < bodIt.length; i++){
  if(i === 0){
    bodIt[i].innerHTML = siteContent["main-content"]["features-content"]
  }
  else if(i === 1){
   bodIt[i].innerHTML = siteContent["main-content"]["about-content"]
  }
  else if(i === 2){
   bodIt[i].innerHTML = siteContent["main-content"]["services-content"]
  }
  else if(i === 3){
   bodIt[i].innerHTML = siteContent["main-content"]["product-content"]
  }
  else if(i === 4){
   bodIt[i].innerHTML = siteContent["main-content"]["vision-content"]
  }
}


let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


const contactTags = document.querySelectorAll(".contact p") 
for(let i = 0; i < contactTags.length; i++){
  contactTags[i].id = `contact-p-${i + 1}`
}
const lBreak = document.createElement("br")
document.getElementById("contact-p-1").appendChild(lBreak)
document.getElementById("contact-p-2").innerHTML = siteContent["contact"]["phone"] 
document.getElementById("contact-p-3").innerHTML = siteContent["contact"]["email"] 
const addyTxt = siteContent["contact"]["address"].substring(0, 18);
const addy = document.createTextNode(addyTxt)
const addyTwoTxt = siteContent["contact"]["address"].substring(19);
const addyTwo = document.createTextNode(addyTwoTxt)
document.getElementById("contact-p-1").insertBefore(addy, document.getElementById("contact-p-1").childNodes[0])
document.getElementById("contact-p-1").childNodes[1].after(addyTwo)


const footerText = document.querySelector("footer p")
footerText.innerHTML = siteContent["footer"]["copyright"]
