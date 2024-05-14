let header = document.getElementById("headers");
let lee = document.getElementById("lee");
let jia = document.getElementById("jia");
let ern = document.getElementById("ern");
let belowheader = document.getElementById("belowheader");
let more = document.getElementById("more");
// ------------------------------------------------
const cursorOutline = document.querySelector(".cursor-outline");
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 300, fill: "forwards" }
  );
});

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  header.style.marginTop = value * 1 + "px";
  jia.style.top = value * -1.5 + "px";
  ern.style.top = value * -0.5 + "px";
  lee.style.top = value * -2.5 + "px";
});

more.onclick = function () {
  belowheader.scrollIntoView(true);
};
//-----------------------------------------------
let aboutbtn = document.getElementById("aboutbtn");
let skillsbtn = document.getElementById("skillsbtn");
let projectsbtn = document.getElementById("projectsbtn");
let gallerybtn = document.getElementById("gallerybtn");
let contactbtn = document.getElementById("contactbtn");

let about = document.getElementById("about");
let skills = document.getElementById("skills");
let projects = document.getElementById("projects");
let gallery = document.getElementById("gallery");
let contact = document.getElementById("contact");
// ---------------------------------------------------

aboutbtn.onclick = function () {
  about.scrollIntoView(true);
};
skillsbtn.onclick = function () {
  skills.scrollIntoView(true);
};
projectsbtn.onclick = function () {
  projects.scrollIntoView(true);
};
gallerybtn.onclick = function () {
  gallery.scrollIntoView(true);
};
contactbtn.onclick = function () {
  contact.scrollIntoView(true);
};
