function go_skills(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 610;
  }
  else {
    document.body.scrollTop = 790;
  }
}
function go_projects(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 2790;
  }
  else {
    document.body.scrollTop = 1660;
  }
}
function go_resume(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 4160;
  }
  else {
    document.body.scrollTop = 2490;
  }
}
function go_contact(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 5030;
  }
  else {
    document.body.scrollTop = 3300;
  }
}
function reload_page(){
  location.reload();
}
AOS.init();
