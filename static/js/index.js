function go_skill(){
  if (window.innerWidth <= 900){
    document.body.scrollTop = 580;
  }
  else {
    document.body.scrollTop = 790;
  }
}
function go_projects(){
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
  document.title = "Arya Ashouri"
  document.getElementById("header-option-home").innerHTML = "Home"
  document.getElementById("header-option-skill").innerHTML = "Skill"
  document.getElementById("header-option-projects").innerHTML = "Project"
  document.getElementById("header-option-resume").innerHTML = "Resume"
  document.getElementById("header-option-summary").innerHTML = "About"
  document.getElementById("header-option-contact").innerHTML = "Contact"
  document.getElementById("skill-title-text").innerHTML = "Some of my Skills"
  document.getElementById("projects-title-text").innerHTML = "Popular Projects"
  document.getElementById("resume-title-text").innerHTML = "Resume and Activities"
  document.getElementById("summary-title-text").innerHTML = "Summary of Activities"
  document.getElementById("contact-title-text").innerHTML = "Contact Information"
  document.getElementById("skill-title-web").innerHTML = "Designing Web Pages"
  document.getElementById("skill-web-description").innerHTML = "Designing web pages using the most recent technologies along with sql database and backend. Web designing with programs such as&#160; Photoshop & Illustrator"
  document.getElementById("skill-pc-description").innerHTML = "Production of applications and programs under Windows using the widely used and well-known C# programming language plus using SQL to storing all the data"
  document.getElementById("skill-ic-description").innerHTML = "In addition to develop coding & professional skills to work with hardware, I'm capable of coding and designing raw kits in Small Basic Which is so much difficult"
  document.getElementById("skill-db-description").innerHTML = "At the same time designing and creating databases to store the data in the web or app space using high-end databases for exclusive Windows applications"
  document.getElementById("skill-title-pc").innerHTML = "Contact Information"
  document.getElementById("skill-title-ic").innerHTML = "Contact Information"
  document.getElementById("skill-title-db").innerHTML = "Contact Information"
  document.getElementById("first-project-title").innerHTML = "First Project"
  document.getElementById("second-project-title").innerHTML = "Second Project"
  document.getElementById("third-project-title").innerHTML = "Third Project"
  document.getElementById("visit-project-button-1").innerHTML = "Visit the Project"
  document.getElementById("visit-project-button-2").innerHTML = "Visit the Project"
  document.getElementById("visit-project-button-3").innerHTML = "Visit the Project"
  document.getElementById("visit-quera-page-title").innerHTML = "Visit My Quera Account"
  document.getElementById("visit-quera-page-description").innerHTML = "In this section of the resume, we take a look at solved questions of Quera website"
  document.getElementById("visit-github-page-title").innerHTML = "Visit My Github Account"
  document.getElementById("visit-github-page-description").innerHTML = "In this section of my resume, we take a look at some of the projects I have done"
  document.getElementById("first-summary-section").innerHTML = "More than 100 projects completed"
  document.getElementById("second-summary-section").innerHTML = "More than 40 satisfied customers"
  document.getElementById("third-summary-section").innerHTML = "More than 3 years of experience"
  document.getElementById("contact-section-description-1").innerHTML = "You can just contact me on the mentioned messengers through the link inserted in the compass and send your criticisms and effective Ideas in a single script"
  document.getElementById("contact-section-description-2").innerHTML = "You can just contact me on the mentioned messengers through the link inserted in the compass and send your criticisms and effective Ideas in a single script"
  document.getElementById("contact-section-description-3").innerHTML = "You can just contact me on the mentioned messengers through the link inserted in the compass and send your criticisms and effective Ideas in a single script"
  document.getElementById("contact-section-description-4").innerHTML = "You can just contact me on the mentioned messengers through the link inserted in the compass and send your criticisms and effective Ideas in a single script"
}
function reload_page(){
  location.reload();
}
AOS.init();
