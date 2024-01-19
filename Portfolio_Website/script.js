let XBtn = document.getElementById("experience-btn");
      let EBtn = document.getElementById("education-btn");
      let educationTab = document.getElementById("education-tab");
      let experienceTab = document.getElementById("experience-tab");
      var sidemenu = document.getElementById("sidemenu");
      

      EBtn.onclick = function () {
        experienceTab.style.display = "none";
        educationTab.style.display = "block";
        
      };
      XBtn.onclick = function () {
        experienceTab.style.display = "block";
        educationTab.style.display = "none";
      };

     
      function openmenu() {
        sidemenu.style.right = "0";
      }
      function closemenu() {
        sidemenu.style.right = "-200px";
      }