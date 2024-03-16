function playAudio() {
  document.getElementById("Cat-voice").play()
}
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
function go_contact(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 5100;
  }
  else {
    document.body.scrollTop = 3315;
  }
}
function reload_page(){
  location.reload();
}
AOS.init();
