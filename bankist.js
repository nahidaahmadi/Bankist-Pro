"use strict";
"node --stack-size=10000";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotContainer = document.querySelector(".dots");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(function (el) {
  el.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//selecting elements
console.log(document.documentElement); //all the documents
console.log(document.querySelector(".header__title"));
console.log(document.querySelectorAll(".section"));
console.log(document.getElementById("section--1"));
console.log(document.getElementsByTagName("button")); //upadtes frequently when changed
console.log(document.getElementsByClassName("btn")); //returns alive html collection
const header = document.querySelector(".header");
//add  with adjacent html
/*
const message = `
    <div class="cookie-message">
        We use cookies for improved functionality  and analytics .
        <button class="btn btn--close-cookie">
        Got it!</button>
    </div>`;

header.insertAdjacentHTML("beforeend", message);

//add like this
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `
We use cookies for improved functionality  and analytics .
<button class="btn btn--close-cookie">
Got it!</button>`;
header.append(message); //first child
//header.before(message);//before header
//header.after(message);//after header
//header.append(message.cloneNode(true)); //now the same element can appear at two places

//delete
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
    //message.parentElement.removeChild(message);
  });

/*
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color); //doesnt show the color
console.log(message.style.backgroundColor);

//for accessing the colors
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

//the 10 is the base of the number for parsing
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

//changing the colors of root in css
document.documentElement.style.setProperty("--color-primary", "orangered");

const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
logo.alt = "beautiful";
console.log(logo.alt);

//to access unstandart properities
console.log(logo.getAttribute("designer"));

//set an attribute
logo.setAttribute("company", "Bankist");
console.log(logo.getAttribute("src"));
const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

//data set
console.log(logo.dataset.versionNumber);

//classlists
//add,remove,toggle,contains

//dont use className cause it overrides the classes

//scroll to
btnScrollTo.addEventListener("click", function (e) {
  const s1coord = section1.getBoundingClientRect();
  /*y-the distance from the element to the viewport
  if you the element is not visible now the top is counted from the section to the viewport even if its not visible
  if the element is visible the top is up to the viewport***

  
  console.log(s1coord);
  console.log(e.target.getBoundingClientRect());
  console.log("current scroll x,y", window.pageXOffset, window.pageYOffset);
  console.log(
    "height,width:",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  /*scrolling
  window.scrollTo(
    s1coord.left + window.pageXOffset,
    s1coord.top + window.pageYOffset
  ); //the coordinates of the element
  /* the top here is relative to viewport not the document so it doesnt work properly  so add the y too*/

/*a smooth scroll
  window.scrollTo({
    left: s1coord.left + window.pageXOffset,
    top: s1coord.top + window.pageYOffset,
    behavior: "smooth",
  });
  section1.scrollIntoView({ behavior: "smooth" });
});

/*event listeners
const h1 = document.querySelector("h1");
const alertMessage = function (e) {
  alert("addEventListener: great! now you are reading the heading");
};

h1.addEventListener("mouseenter", alertMessage);
setTimeout(() => h1.removeEventListener("mouseenter", alertMessage), 3000);
/*when you change the function it overrides the d-function doesnt implement it again
h1.onmouseenter = function (e) {
alert("onmouseenter:great! now you are reading the heading");
};

//rgb(255,255,255);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
/*
const navs = document.querySelector(".nav__links");
const nav1 = document.querySelector(".nav__link");
const nav3 = document.querySelector("nav");


nav3.addEventListener("click", function () {
  navs.style.backgroundColor = randomColor();
});
nav1.addEventListener("click", function () {
  navs.style.backgroundColor = randomColor();
});
navs.addEventListener("click", function () {
  navs.style.backgroundColor = randomColor();
});

//bubbling phase--the clicked elemenst are here are all eachothers parent
//after reaching the target the bubbling phase goes to parents to see if there is an eventlistener there
//events are catched in the bubbling phase not the capture phase

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target); //all the elements are after this--same
  // e.stopPropagation(); //stops the bubbling phase here and others wont be controlled
});

document.querySelector(".nav__links").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target, e.currentTarget);
    console.log(e.currentTarget === this);
  },
  true
);

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target);
  console.log("Nav");
}); //does the eventlistener in capture phase*/

//scrolling ---navbar--it is not an efficient way cause it is a copy of the same function
/*
document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault(); //not to move to the id part
    const id = this.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
//use event delegation instead
//1.add event listener to a common parent element
//2.determine what element origined the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  //matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/*const h1 = document.querySelector("h1");
console.log(h1.childNodes); //types that are  written inside it,comment,text...
console.log(h1.children); //children and br
console.log(h1.firstElementChild); //tag and class name
console.log(h1.parentNode);
console.log(h1.parentElement);

//find the nearest parent
h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)";

//siblings --element
console.log(h1.previousElementSibling); //ignores commebt nodes or non element nodes
console.log(h1.nextElementSibling);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = "scale(0.5)";
  }
});

//type
console.log(h1.previousSibling);
console.log(h1.nextSibling);
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  if (!clicked) return;
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((t) => t.classList.remove("operations__content--active"));
  clicked.classList.add("operations__tab--active");

  //activate content
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//passing arguements to event listeners
const handleHover = function (e, opacity = 0) {
  //always receives the event and then use bind for other arguement
  if (e.target.classList.contains("nav__link")) {
    const siblings = e.target.closest(".nav").querySelectorAll(".nav__link");
    const logo = e.target.closest(".nav").querySelector("img");
    siblings.forEach(function (el) {
      if (el !== e.target) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//passing arguments to an eventhandler with bind--means this
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover(1));*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Selecting elements
console.log(document.documentElement); //the html element
console.log(document.head);
console.log(document.body);

console.log(document.querySelectorAll(".section"));
console.log(document.getElementById("section--1"));

console.log(document.getElementsByTagName("button")); //html collection buttons

console.log(document.getElementsByClassName("btn"));

//creating and inserting elements  1.
//1.create a div 2.add  class to the div 3.innerhtml of the div   4.prepend or append the div inside an existing div
const message = document.createElement("div");
message.classList.add("cookie-message"); //div class=cookie..
message.innerHTML = `
We use cookies for improved functionality and analytics. 
<button class="btn btn--close--cookie">Got it!</button>`;
header.append(message);
//header.before(message); //addes it as a sibling before the header
//header.after(message); //addes it as a sibling after the header
//header.prepend(message.cloneNode(true)); //all the child elements will also be copied,we can have the same element in two places

/*2--using adjacentHTML
const html = `
<div class="cookie-message">
We use cookies for improving functionality and analytics.
<button class="btn btn--close--cookie">Got it!</button>
</div>
`;
header.insertAdjacentHTML("beforebegin", html);*/

//remove the cookie message when clicked
document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function (e) {
    message.remove(); //remove this div
    //message.parenElement.removeChild(message);
    //remove the parent and then the children
  });

//Style
message.style.backgroundColor = "#37383d";
message.style.width = "120%"; //inline styles

console.log(header.style.color); //only inline styles can be accessed this way
console.log(message.style.width);

console.log(getComputedStyle(header)); //to access properities other than inline
console.log(getComputedStyle(header).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

//change the root colors of the root element
//document.documentElement.style.setProperty("--color-primary", "orangered");

//Attributes
console.log(logo.href);
console.log(logo.src);
console.log(logo.className);

//NON_standart
console.log(logo.getAttribute("designer"));
logo.setAttribute("assistant", "Bankist2");
console.log(logo.getAttribute("assistant"));

//Smooth Scrolling
btnScrollTo.addEventListener("click", function (e) {
  //const s1coord = section1.getBoundingClientRect(); //get the coordinates
  /*window.scrollTo({
    left: s1coord.left + window.pageXOffset,
    top: s1coord.top + window.pageYOffset,
    behavior: "smooth",
  });
  console.log(document.documentElement.clientHeight);
  console.log(document.documentElement.clientWidth);*/

  //section....smooth
  section1.scrollIntoView({ behavior: "smooth" });
});

//event listeners
const h1 = document.querySelector("h1");
/*const alertMessage = function () {
  alert("you are reading the heading now,Great!");
  //h1.removeEventListener("mouseenter", alertMessage);
};

h1.addEventListener("mouseenter", alertMessage);
setTimeout(() => h1.removeEventListener("mouseenter", alertMessage), 3000);*/

//bubbling--goes upward and checks for parents eventListener
const randomcolor = () =>
  `rgb(${randomInt(255, 0)},${randomInt(255, 0)},${randomInt(255, 0)})`;

const randomInt = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomcolor());
/*
//bubbling:the elements are parent and child and when one is clicked all works--upward
document.querySelector(".nav__link").addEventListener("click", function (e) {
  console.log("Nav--link", e.target, e.currentTarget);
  this.style.backgroundColor = randomcolor();

  //stop the event propagation--yayılma
  e.stopPropagation();    //doesnt move upwards
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log("nav__links", e.target, e.currentTarget);
  this.style.backgroundColor = randomcolor();
});
//doing this in the capturing phase--pass a true to the eventlistener--3 parameters
document.querySelector(".nav").addEventListener("click", function (e) {
  console.log("nav", e.target, e.currentTarget);
  this.style.backgroundColor = randomcolor();
},true);*/

//event delegation
//1.Add event listener to common parent
//2.determine what event originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  //matching strategy--no all the div
  if (e.target.classList.contains("nav__link")) {
    if (!e.target.classList.contains("nav__link--btn")) {
      //the open account button is not included here!!!
      const id = e.target.getAttribute("href"); //not the absolute href
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  }
});

//DOM traversing
console.log(h1);
//downwards--child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes); //nodes can be anything-text,comment
console.log(h1.children); //only the inside tag parts-htmlcollection
/*h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";*/

//upwards--parents
console.log(h1.parentNode);
console.log(h1.parentElement); //same as first one

//closest finds the parent no matter how far it is--opposite of queryselector
//the parent element that is closest to the h1 and has the header class
h1.closest(".header").style.backgroundColor = "var(--gradient-secondary)";

//sideways
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling); //tag and insides the tag
console.log(h1.previousSibling); //just the type
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

//all the siblings
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    console.log(el);
  }
});

//tabbed component
tabsContainer.addEventListener("click", function (e) {
  //e.parent:on button it shows the parent

  const clicked = e.target.closest(".operations__tab"); //the one that is the closest to this class
  //guard clause
  if (!clicked) return; //if null return-if there is no clicked

  //remove the active class form each of it
  tabs.forEach((el) => el.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((el) =>
    el.classList.remove("operations__content--active")
  );
  //select the class has the content of active class
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

//passing parameters to handlers
//nav opacity
const opacityNav = function (e) {
  if (e.target.classList.contains("nav__link")) {
    //there is an image too
    const siblings = e.target.closest(".nav").querySelectorAll(".nav__link");
    const logo = e.target.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== e.target) el.style.opacity = this;
    });
    logo.style.opacity = this;
    //e here is the event,and this means the passed on eventlistener
    //when u want to pass parameters other than event to the event handler
    //fun--use funcname.bind(parameters);
  }
};
//bind method sets the this keyword to the parameter,if more parameters use object or array
//u cant use opacityNav(e,opacity):the function doesnt return anything to be used,as the fun is avocated when started
nav.addEventListener("mouseover", opacityNav.bind(0.5));
nav.addEventListener("mouseout", opacityNav.bind(1));

document.querySelector(".nav__links").addEventListener("click", function (e) {
  if (e.target.classList.contains(".nav__link")) {
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  }
});

/*sticky navigation--intersection obeserve api
const initialCoord = section1.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (this.window.scrollY > initialCoord.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});*/

//2.sticky navigation
//intersectionobserver(callbackfun,options)
//this is called eachtime the target intersect with root
//entries are an array of the threshold
const callBack = function (entries, observer) {
  /*entries.forEach((entry) => {
    console.log(entry);
  });*/
  const [entry] = entries;
  //the intersection of viewport and header is only when the page is not scroller
  //which is when the intersection is true-0
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

/*const options = {
  root: null, //all the viewport is available
  threshold: [0, 0.2], //moving into the view and out of the view
};
const observer = new IntersectionObserver(callBack, options);
observer.observe(section1);*/
const height = nav.getBoundingClientRect().height;
const options2 = {
  root: null, //the element that the target is intersecting
  threshold: 0, //the intersection is when the header can be seen in the viewport
  //when is moved and unvisible-the intersection is not 0 anymore so make the change
  rootMargin: "-" + height + "px",
};

const headerObserve = new IntersectionObserver(callBack, options2);
headerObserve.observe(header);

//reveal sections
const sections = document.querySelectorAll(".section");

function callBackSec(entries, observer) {
  const [entry] = entries;

  //guard case--if false directly returned,if true continue
  if (!entry.isIntersecting) return;
  //if intersecting then continue
  entry.target.classList.remove("section--hidden");
  //unobserve :stop tracking changes or unsubscribe from a specific event or data source
  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(callBackSec, {
  root: null,
  threshold: 0.15, //when each section intersects 15%with the viewport
});
//VERY İMPRTANT:intersection precent refers to the percentage of the element's area that is currently
//visible within the visible portion of the browser window
sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//lazy-loading images
const lazyimg = document.querySelectorAll("img[data-src]");
console.log(lazyimg);
function callBackimg(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  //change the source to data source
  entry.target.src = entry.target.dataset.src;
  //entry.target.classList.remove("lazy-img");//it happens so fast
  entry.target.addEventListener("load", function (e) {
    e.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(callBackimg, {
  root: null,
  threshold: 0, //right the time it is visible to the vieport
  rootMargin: "60px",
});
lazyimg.forEach(function (el) {
  imgObserver.observe(el);
});

//slider
function sliderFun() {
  let curSlide = 0; //keeps the track of current slide
  const maxSlide = slides.length;
  const slider = document.querySelector(".slider");

  //move the slides to the left  0%,100%,200%,300%

  /*make the slider move to the left as a whole and make the overflow visible
slider.style.transform = "scale(0.4) translateX(-800px)";
slider.style.overflow = "visible";*/
  slides.forEach(
    (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
  );
  const goToSlide = function (current) {
    slides.forEach(
      (slide, i) =>
        (slide.style.transform = `translateX(${100 * (i - current)}%)`)
    );
  };

  //create a dot for each of the slides
  const createDot = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  //dot active class
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;
    goToSlide(curSlide);
  };
  btnLeft.addEventListener("click", nextSlide);
  btnRight.addEventListener("click", nextSlide);

  //keyboard
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  //select the dots class
  const dots = document.querySelectorAll(".dots__dot");
  function dotActive(dataset) {
    dots.forEach((dot, i) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${dataset}"]`)
      .classList.add("dots__dot--active");
  }
  function init() {
    goToSlide(0);
    createDot();
    dotActive(0); //when the program is started there is no light
  }
  init();
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      //take the data set of clicked dot
      const { slide } = e.target.dataset;
      goToSlide(slide);
      dotActive(slide);
    }
  });
}
sliderFun();

//when only html and js is parsed and loaded
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and dom tree built", e);
});

//when the page is fully loaded
window.addEventListener("load", function (e) {
  console.log("page fully loaded", e);
});

/*message
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = "";
});*/
