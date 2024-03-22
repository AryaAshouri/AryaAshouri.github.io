function go_skill(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 580;
  }
  else {
    document.body.scrollTop = 790;
  }
}
function go_project(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 2740;
  }
  else {
    document.body.scrollTop = 1660;
  }
}
function go_resume(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 4230;
  }
  else {
    document.body.scrollTop = 2500;
  }
}
function go_summary(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 5100;
  }
  else {
    document.body.scrollTop = 3315;
  }
}
function go_contact(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 5940;
  }
  else {
    document.body.scrollTop = 3940;
  }
}
function change_brightness_mode(){
  if (document.getElementById("brightness-icon").getAttribute("src") == "static/img/icon/light/light.png"){
    document.documentElement.style.setProperty("--main-theme-color", "rgb(0, 174, 255)");
    document.documentElement.style.setProperty("--another-theme-color", "rgb(51, 190, 255)");
    document.documentElement.style.setProperty("--another-deep-color", "rgb(71, 197, 255)");
    document.getElementById("web-icon").setAttribute("src", "static/img/icon/light/web.png");
    document.getElementById("pc-icon").setAttribute("src", "static/img/icon/light/pc.png");
    document.getElementById("ic-icon").setAttribute("src", "static/img/icon/light/ic.png");
    document.getElementById("db-icon").setAttribute("src", "static/img/icon/light/db.png");
    document.getElementById("id-icon-1").setAttribute("src", "static/img/icon/light/id.png");
    document.getElementById("id-icon-2").setAttribute("src", "static/img/icon/light/id.png");
    document.getElementById("id-icon-3").setAttribute("src", "static/img/icon/light/id.png");
    document.getElementById("id-icon-4").setAttribute("src", "static/img/icon/light/id.png");
    document.getElementById("brightness-icon").setAttribute("src", "static/img/icon/dark/dark.png")
  }
  else {
    document.documentElement.style.setProperty("--main-theme-color", "rgb(30, 27, 51)");
    document.documentElement.style.setProperty("--another-theme-color", "rgb(35, 31, 56)");
    document.documentElement.style.setProperty("--another-deep-color", "rgb(38, 34, 61)");
    document.getElementById("web-icon").setAttribute("src", "static/img/icon/dark/web.png");
    document.getElementById("pc-icon").setAttribute("src", "static/img/icon/dark/pc.png");
    document.getElementById("ic-icon").setAttribute("src", "static/img/icon/dark/ic.png");
    document.getElementById("db-icon").setAttribute("src", "static/img/icon/dark/db.png");
    document.getElementById("id-icon-1").setAttribute("src", "static/img/icon/dark/id.png");
    document.getElementById("id-icon-2").setAttribute("src", "static/img/icon/dark/id.png");
    document.getElementById("id-icon-3").setAttribute("src", "static/img/icon/dark/id.png");
    document.getElementById("id-icon-4").setAttribute("src", "static/img/icon/dark/id.png");
    document.getElementById("brightness-icon").setAttribute("src", "static/img/icon/light/light.png")
  }
}
function change_language(){
  document.getElementById("header-option-home").innerHTML = "Home"
  document.getElementById("header-option-skill").innerHTML = "Skill"
  document.getElementById("header-option-project").innerHTML = "Project"
  document.getElementById("header-option-resume").innerHTML = "Resume"
  document.getElementById("header-option-summary").innerHTML = "About"
  document.getElementById("header-option-contact").innerHTML = "Contact"
}
function reload_page(){
  location.reload();
}
AOS.init();
