function Strength(password) {
    let i = 0;
    if (password.length >= 4) {
      i++;
    }
    if (password.length >= 8) {
      i++;
    }
    if (password.length >= 10) {
      i++;
    }
    if (/[A - Z]/.test(password)) {
      i++;
    }
    if (/[1 - 9]/.test(password)) {
      i++;
    }
    if (/[A-Za-z0-3]/.test(password)) {
      i++;
    }
    return i;
  }
  
  let container = document.querySelector(".input-wrapper-strength");
  document.addEventListener("keyup", function(e) {
    let password = document.querySelector("#myPassword").value;
  
    let strength = Strength(password);
    if (strength <= 2) {
      container.classList.add("weak");
      container.classList.remove("medium");
      container.classList.remove("strong");
    } else if (strength >= 2 && strength <= 4) {
      container.classList.remove("weak");
      container.classList.add("medium");
      container.classList.remove("strong");
    } else {
      container.classList.remove("weak");
      container.classList.remove("medium");
      container.classList.add("strong");
    }
  });
  
  let pswrd = document.querySelector("#myPassword");
  let show = document.querySelector(".show");
  show.onclick = function() {
    if (pswrd.type === "password") {
      pswrd.setAttribute("type", "text");
      show.classList.add("hide");
    } else {
      pswrd.setAttribute("type", "password");
      show.classList.remove("hide");
    }
};

var linkContainer = document.getElementById("sideNav");

var links = linkContainer.getElementsByClassName("a-navlink");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");

        if(current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        this.className += " active";
    });
};  


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighLighter);

function navHighLighter() {
    
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -500;
        sectionId = current.getAttribute("id");

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ){
            document.querySelector(".c-sidebar-contents a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".c-sidebar-contents a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
    
};

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $("#copyText").text("Copied");
}

function openCode(evt, codeName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(codeName).style.display = "block";
  evt.currentTarget.className += " active";
}