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

//nav
const nav = document.querySelector('nav')
const navItem1 = nav.querySelector('a:nth-of-type(1)');
const navItem2 = nav.querySelector('a:nth-of-type(2)');
const navItem3 = nav.querySelector('a:nth-of-type(3)');
const navItem4 = nav.querySelector('a:nth-of-type(4)');
const navItem5 = nav.querySelector('a:nth-of-type(5)');
const navItem6 = nav.querySelector('a:nth-of-type(6)');

navItem1.textContent = siteContent.nav['nav-item-1']
navItem2.textContent = siteContent.nav['nav-item-2']
navItem3.textContent = siteContent.nav['nav-item-3']
navItem4.textContent = siteContent.nav['nav-item-4']
navItem5.textContent = siteContent.nav['nav-item-5']
navItem6.textContent = siteContent.nav['nav-item-6']

//nav change color
const newColor = document.querySelectorAll('a')
newColor.forEach(nav =>{
nav.style.color ='green'
})

//nav .append

const headerEl = document.querySelector('nav')
const newNav = document.createElement('a')
newNav.textContent = 'New'
headerEl.appendChild(newNav)

//nav .prepend

const newest = document.createElement('a')
newest.textContent = 'Hello'
headerEl.prepend(newest)

//cta 

const cta =  document.querySelector('.cta')
const main =  cta.querySelector('h1')
const ctaBtn = cta.querySelector('button')
const ctaImg = cta.querySelector('#cta-img')

main.textContent = siteContent.cta['h1']
ctaBtn.textContent = siteContent.cta['button']
ctaImg.src = siteContent.cta['img-src']

//main-content

const mainContent = document.querySelector('.main-content')
const topContent = mainContent.querySelector('.top-content')
const mainDiv1 = topContent.querySelector('.text-content:nth-of-type(1)')
const topFirstH4 = mainDiv1.querySelector('h4')
const mainDiv2 = topContent.querySelector('.text-content:nth-of-type(2)')
const topBottomH4 = mainDiv2.querySelector('h4')
const firstP = mainDiv1.querySelector('p')
const secondP = mainDiv2.querySelector('p')


topFirstH4.textContent = siteContent['main-content']['features-h4'];
firstP.textContent = siteContent['main-content']['features-content']
topBottomH4.textContent = siteContent['main-content']['about-h4'];
secondP.textContent = siteContent['main-content']['about-content']

//image

const middlePic = mainContent.querySelector('#middle-img')
middlePic.setAttribute('src', siteContent['main-content']['middle-img-src'])

//bottom content
const bottomContent = mainContent.querySelector('.bottom-content')


const bottom1 = bottomContent.querySelector('.text-content:nth-of-type(1)')
const bottom2 = bottomContent.querySelector('.text-content:nth-of-type(2)')
const bottom3 = bottomContent.querySelector('.text-content:nth-of-type(3)')

const bottom1H4 = bottom1.querySelector('h4')
const bottom2H4 = bottom2.querySelector('h4')
const bottom3H4 = bottom3.querySelector('h4')

const bottomP1 = bottom1.querySelector('p')
const bottomP2 = bottom2.querySelector('p')
const bottomP3 = bottom3.querySelector('p')

bottomP1.textContent = siteContent['main-content']['services-content']
bottomP2.textContent = siteContent['main-content']['product-content']
bottomP3.textContent = siteContent['main-content']['vision-content']



bottom1H4.textContent = siteContent['main-content']['services-h4']
bottom2H4.textContent = siteContent['main-content']['product-h4']
bottom3H4.textContent = siteContent['main-content']['vision-h4']

//contact

const contactContent = document.querySelector('.contact')
const lastH4  = contactContent.querySelector('h4')

// const pTag1 = contactContent.querySelector('p')
// const phone = contactContent.querySelector('p')


lastH4.textContent = siteContent['contact']['contact-h4']

const pTag1 = contactContent.querySelector('p:nth-of-type(1)')
const pTag2 = contactContent.querySelector('p:nth-of-type(2)')
const pTag3 = contactContent.querySelector('p:nth-of-type(3)')

// const address1 = pTag1.querySelector('p')
// const phone1 = pTag2.querySelector('p')
// const email1 = pTag3.querySelector('p')


pTag1.textContent = siteContent['contact']['address']
pTag2.textContent = siteContent['contact']['phone']
pTag3.textContent = siteContent['contact']['email']

//footer

const copyFoot = document.querySelector('footer')
const lastThing = copyFoot.querySelector('p')
lastThing.textContent = siteContent['footer']['copyright']














