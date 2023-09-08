var units = document.querySelectorAll(".unit");

    for (var i = 0; i < units.length; i++) {
      units[i].addEventListener("click", function() {
        this.classList.toggle("open");
        var skills = this.querySelector(".skills");
        if (skills) {
          skills.classList.toggle("collapsed");
          var plusMinus = this.querySelector(".plus-minus");
          if (plusMinus) {
            plusMinus.classList.toggle("open");
          }
        }
      });
    }