var i = 0;
var txt =
  "Full-stack software developer and architect, in love with everything related to programming, leadership and innovation. I am also a doctor.";
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  typeWriter();
});

function openTab(evt, tabName) {
  console.log(tabName);
  tabs = document.getElementsByClassName("tab");

  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}
