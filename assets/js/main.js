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

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        return;
      }
      entry.target.classList.remove("in-view");
    });
  });

  const allAnimatedElements = document.querySelectorAll(".animate");

  allAnimatedElements.forEach((element) => observer.observe(element));
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

popup = {
  init: function () {
    $("figure").click(function () {
      popup.open($(this));
    });

    $(document)
      .on("click", ".popup img", function () {
        return false;
      })
      .on("click", ".popup", function () {
        popup.close();
      });
  },
  open: function ($figure) {
    $(".myProjects").addClass("pop");
    $popup = $('<div class="popup" />').appendTo($("body"));
    $fig = $figure.clone().appendTo($(".popup"));
    $bg = $('<div class="bg" />').appendTo($(".popup"));
    $close = $(
      '<div class="close"><svg><use xlink:href="#close"></use></svg></div>'
    ).appendTo($fig);
    $shadow = $('<div class="shadow" />').appendTo($fig);
    src = $("img", $fig).attr("src");
    $shadow.css({ backgroundImage: "url(" + src + ")" });
    $bg.css({ backgroundImage: "url(" + src + ")" });
    setTimeout(function () {
      $(".popup").addClass("pop");
    }, 10);
  },
  close: function () {
    $(".myProjects, .popup").removeClass("pop");
    setTimeout(function () {
      $(".popup").remove();
    }, 100);
  },
};

popup.init();

$(window).on("scroll", function () {
  $(".container-2").css("bottom", $(window).scrollTop() * -1 + "px");
});

// window.addEventListener("scroll", () => {
//   $(".container-2").css("bottom", $(window).scrollTop() * -1);
// });
