document.querySelector(".menu-toggle").addEventListener("click", function(){
    document.querySelectorAll(".menu-toggle-item").forEach((item, i) => {
        item.classList.toggle("clicked");
        document.querySelector(".menu-nav").classList.toggle("clicked");
    })
})

function checkMonth(month, day){
    if (month < 1 || month > 12) {
        document.getElementById("bday-err").classList.add("active");
        return true;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day < 1 || day > 30) {
            document.getElementById("bday-err").classList.add("active");
            return true;
        } else {
            document.getElementById("bday-err").classList.remove("active");
            return false;
        }
    } else {
        if (day < 1 || day > 31 ) {
            document.getElementById("bday-err").classList.add("active");
            return true;
        } else {
            document.getElementById("bday-err").classList.remove("active");
            return false;
        }
    }
}

function validateForm(event) {
    event.preventDefault()

    let error = 0;

    var name = document.getElementById("fName").value;
    var email = document.getElementById("em").value;

    var day = document.getElementById("dd").value.trim();
    var month = document.getElementById('mm').value.trim();
    var year = document.getElementById("yy").value.trim();

    var male = document.getElementById("gender-male").checked;
    var female = document.getElementById("gender-female").checked;

    var file = document.getElementById("porto").files.length;

    var agree = document.getElementById("agree").checked;

    let bdate = 1;

    // console.log(name)
    // console.log(email)
    // console.log(day)
    // console.log(month)
    // console.log(year)

    // console.log(male)
    // console.log(female)
    // console.log(file)
    // console.log(agree)

    // 1. Validate Name: Should be longer than 3 characters
    if (name.length <= 3) {
        document.getElementById("name-err").classList.add("active");
        error ++;
    } else {
        document.getElementById("name-err").classList.remove("active");
    }

    // 2. Validate Email: contains both @ and . 
    if (!(email.includes("@"))){
        document.getElementById("email-err").classList.add("active");
        error++;
    } else {
        const index = email.indexOf("@");
        const domain = email.slice(index+1)
        
        if (!(domain.includes("."))){
            document.getElementById("email-err").classList.add("active");
            error++;
        } else {
            document.getElementById("email-err").classList.remove("active");
        }
    }

    // 3. Validate Birthday Date: Must be numerical
    if (!(isNaN(dd) && (isNaN(mm)) && (isNaN(yy)))){
        bdate = 0;
    } else {
        bdate = 1
    }

    // 4. Validate Birthday Date: Must be correct
    // Ex: 2005-2-29 is impossible, shouldn't be more than 28 days
    if (bdate == 1){
        if (year % 4 == 0){
            if (month == 2) {
                if (day < 1 || day > 29) {
                    document.getElementById("bday-err").classList.add("active");
                    error ++;
                } else {
                    document.getElementById("bday-err").classList.remove("active");
                }
            } else {
                if (checkMonth(month, day)){
                    error ++;
                }
            }
        } else {
            if (month == 2) {
                if (day < 1 || day > 28) {
                    document.getElementById("bday-err").classList.add("active");
                    error ++;
                } else {
                    document.getElementById("bday-err").classList.remove("active");
                }
            } else {
                if (checkMonth(month, day)){
                    error ++;
                }
            }
        }
    }
    
    // 5. Validate Gender: either male or female has been chosen
    if (male == false && female == false) {
        document.getElementById("gender-err").classList.add("active");
        error ++;
    } else {
        document.getElementById("gender-err").classList.remove("active");
    }

    // 6. Validate Portfolio: Make sure atleast 1 file has been uploaded
    if (file <= 0){
        document.getElementById("port-err").classList.add("active");
        error ++;
    } else {
        document.getElementById("port-err").classList.remove("active");
    }

    // 7. Validate Agreement: TnC must be agreed
    if (agree == false){
        document.getElementById("agree-err").classList.add("active");
        error ++;
    } else {
        document.getElementById("agree-err").classList.remove("active");
    }

    // 8. Validate All requirements have been fulfilled
    if (error === 0){
        alert("Thankyou for applying for Christian Wijaya's upcoming Event");
        window.location.href = "../event/eventPage.html";
    }
}
