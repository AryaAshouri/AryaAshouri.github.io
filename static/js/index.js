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
  if (document.title == "Arya Ashouri"){
    document.title = "آریا آشوری"
    document.getElementById("header-option-home").innerHTML = "خانه"
    document.getElementById("header-option-skill").innerHTML = "مهارت"
    document.getElementById("header-option-projects").innerHTML = "پروژه"
    document.getElementById("header-option-resume").innerHTML = "رزومه"
    document.getElementById("header-option-summary").innerHTML = "درباره"
    document.getElementById("header-option-contact").innerHTML = "ارتباط"
    document.getElementById("skill-title-text").innerHTML = "مهارت و توانایی ها"
    document.getElementById("projects-title-text").innerHTML = "پروژه های محبوب"
    document.getElementById("resume-title-text").innerHTML = "رزومه و فعالیت ها"
    document.getElementById("summary-title-text").innerHTML = "خلاصه فعالیت ها"
    document.getElementById("contact-title-text").innerHTML = "راه های ارتباطی"
    document.getElementById("skill-title-web").innerHTML = "طراحی وبسایت و وبلاگ"
    document.getElementById("skill-title-pc").innerHTML = "طراحی اپلیکیشن ویندوز"
    document.getElementById("skill-title-ic").innerHTML = "برنامه نویسی کیت ربات"
    document.getElementById("skill-title-db").innerHTML = "طراحی بانک اطلاعاتی"
    document.getElementById("skill-web-description").innerHTML = " طراحی صفحات وب بوسیله بروز ترین تکنولوژی های روز همراه با پایگاه داده و بک اند. دیزاین سایت همراه با برنامه های حرفه ای شامل فیگما و فتوشاپ و ادوبی ایلاستریتور"
    document.getElementById("skill-pc-description").innerHTML = "تولید اپلیکیشن و برنامه های تحت ویندوز بوسیله زبان برنامه نویسی پرکاربرد و معروف سی شارپ بخش ویندوز فرم بعلاوه طراحی پایگاه داده برای ذخیره اطلاعات مورد نیاز در آن"
    document.getElementById("skill-ic-description").innerHTML = "علاوه بر توسعه و یادگیری زبان های پرکاربرد برای کار با سخت افزار قادر به برنامه نویسی و طراحی کیت های خام ربات به زبان اسمال بیسیک در فضای اختصاصی و حرفه ای بسکام"
    document.getElementById("skill-db-description").innerHTML = "طراحی و ایجاد بانک های اطلاعاتی برای ذخیره اطلاعات در فضای وب و یا اپ بوسیله دیتابیس های مطرح رده بالا برای برنامه های اختصاصی ویندوز که امنیت قابل تضمینی دارند"
    document.getElementById("first-project-title").innerHTML = "پروژه شماره یک"
    document.getElementById("second-project-title").innerHTML = "پروژه شماره دو"
    document.getElementById("third-project-title").innerHTML = "پروژه شماره سه"
    document.getElementById("visit-project-button-1").innerHTML = "مشاهده پروژه"
    document.getElementById("visit-project-button-2").innerHTML = "مشاهده پروژ"
    document.getElementById("visit-project-button-3").innerHTML = "مشاهده پروژ"
    document.getElementById("visit-quera-page-title").innerHTML = "برو به کوئرای من سر بزن"
    document.getElementById("visit-quera-page-description").innerHTML = "در این بخش از رزومه به بعضی از پروژه هایی که تا به حال انجام دادم یه نگاهی میندازیم"
    document.getElementById("visit-github-page-title").innerHTML = "برو به گیتهاب من سر بزن"
    document.getElementById("visit-github-page-description").innerHTML = "در این بخش از رزومه به بررسی سوالات الگوریتمی حل شده سایت کوئرا میپردازیم"
    document.getElementById("first-summary-section").innerHTML = "بالغ بر ۱۰۰ پروژه به اتمام رسیده"
    document.getElementById("second-summary-section").innerHTML = "بالغ بر ۴۰ مشتری پایه ثابت و راضی"
    document.getElementById("third-summary-section").innerHTML = "بالغ بر ۳ سال تجربه برنامه نویسی"
    document.getElementById("contact-title-gmail").innerHTML = "آدرس شخصی جی میل"
    document.getElementById("contact-title-telegram").innerHTML = "آدرس شخصی تلگرام"
    document.getElementById("contact-title-discord").innerHTML = "آدرس شخصی دیسکورد"
    document.getElementById("contact-title-bale").innerHTML = "آدرس شخصی بله"
    document.getElementById("contact-description-gmail").innerHTML = "شما می توانید از طریق لینک درج شده درون قطب نما، در پیام رسان های مذکور با بنده ارتباط بگیرید و انتقاد ها و پیشنهاد هایی که دارید را در قالب پیامی در پیامرسان بفرستید"
    document.getElementById("contact-description-telegram").innerHTML = "شما می توانید از طریق لینک درج شده درون قطب نما، در پیام رسان های مذکور با بنده ارتباط بگیرید و انتقاد ها و پیشنهاد هایی که دارید را در قالب پیامی در پیامرسان بفرستید"
    document.getElementById("contact-description-discord").innerHTML = "شما می توانید از طریق لینک درج شده درون قطب نما، در پیام رسان های مذکور با بنده ارتباط بگیرید و انتقاد ها و پیشنهاد هایی که دارید را در قالب پیامی در پیامرسان بفرستید"
    document.getElementById("contact-description-bale").innerHTML = "شما می توانید از طریق لینک درج شده درون قطب نما، در پیام رسان های مذکور با بنده ارتباط بگیرید و انتقاد ها و پیشنهاد هایی که دارید را در قالب پیامی در پیامرسان بفرستید"
    document.getElementById("brightness-icon").style.marginLeft = ""

  }
  else if (document.title == "آریا آشوری"){
    document.title = "Arya Ashouri"
    document.getElementById("header-option-home").innerHTML = "Home"
    document.getElementById("header-option-skill").innerHTML = "Skills"
    document.getElementById("header-option-projects").innerHTML = "Projects"
    document.getElementById("header-option-resume").innerHTML = "Resume"
    document.getElementById("header-option-summary").innerHTML = "About"
    document.getElementById("header-option-contact").innerHTML = "Contact"
    document.getElementById("skill-title-text").innerHTML = "Some of my Skills"
    document.getElementById("projects-title-text").innerHTML = "Popular Projects"
    document.getElementById("resume-title-text").innerHTML = "Resume and Activities"
    document.getElementById("summary-title-text").innerHTML = "Summary of Activities"
    document.getElementById("contact-title-text").innerHTML = "Contact Information"
    document.getElementById("skill-title-web").innerHTML = "Website And Blog Design"
    document.getElementById("skill-title-pc").innerHTML = "Developing Applications"
    document.getElementById("skill-title-ic").innerHTML = "Programming Robotic Kits"
    document.getElementById("skill-title-db").innerHTML = "Designing Light Databases"
    document.getElementById("skill-web-description").innerHTML = "Designing web pages using the most recent technologies along with sql database and backend. Web designing with programs such as&#160; Photoshop & Illustrator"
    document.getElementById("skill-pc-description").innerHTML = "Production of applications and programs under Windows using the widely used and well-known C# programming language plus using SQL to storing all the data"
    document.getElementById("skill-ic-description").innerHTML = "In addition to develop coding & professional skills to work with hardware, I'm capable of coding and designing raw kits in Small Basic Which is so much difficult"
    document.getElementById("skill-db-description").innerHTML = "At the same time designing and creating databases to store the data in the web or app space using high-end databases for exclusive Windows applications"
    document.getElementById("first-project-title").innerHTML = "First Project"
    document.getElementById("second-project-title").innerHTML = "Second Project"
    document.getElementById("third-project-title").innerHTML = "Third Project"
    document.getElementById("visit-project-button-1").innerHTML = "Visit the Project"
    document.getElementById("visit-project-button-2").innerHTML = "Visit the Project"
    document.getElementById("visit-project-button-3").innerHTML = "Visit the Project"
    document.getElementById("visit-quera-page-title").innerHTML = "Visit My Quera Account"
    document.getElementById("visit-quera-page-description").innerHTML = "In this section of my resume, we take a look at the solved algorithmic questions"
    document.getElementById("visit-github-page-title").innerHTML = "Visit My Github Account"
    document.getElementById("visit-github-page-description").innerHTML = "In this section of my resume, we take a look at some of the projects I have done"
    document.getElementById("first-summary-section").innerHTML = "More than 100 projects completed"
    document.getElementById("second-summary-section").innerHTML = "More than 40 satisfied customers"
    document.getElementById("third-summary-section").innerHTML = "More than 3 years of experience"
    document.getElementById("contact-title-gmail").innerHTML = "Personal Gmail Address"
    document.getElementById("contact-title-telegram").innerHTML = "Personal Telegram Address"
    document.getElementById("contact-title-discord").innerHTML = "Personal Discord Address"
    document.getElementById("contact-title-bale").innerHTML = "Personal Bale Address"
    document.getElementById("contact-description-gmail").innerHTML = "You can just contact me on the mentioned messengers through the link inserted in the compass and send your criticisms and effective Ideas in a single script"
    document.getElementById("contact-description-telegram").innerHTML = "You can just contact me on the mentioned messengers through the link inserted in the compass and send your criticisms and effective Ideas in a single script"
    document.getElementById("contact-description-discord").innerHTML = "You can just contact me on the mentioned messengers through the link inserted in the compass and send your criticisms and effective Ideas in a single script"
    document.getElementById("contact-description-bale").innerHTML = "You can just contact me on the mentioned messengers through the link inserted in the compass and send your criticisms and effective Ideas in a single script"
    if (window.innerWidth <= 900){
      document.getElementById("brightness-icon").style.marginLeft = "-7"
    }
    if (window.innerWidth > 900){
      document.getElementById("brightness-icon").style.marginLeft = "0"
    }
  }
}
function reload_page(){
  location.reload();
}
AOS.init();
