function dataGenertor() {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * str.length);
        captcha += str[random];
    }
    return captcha;
}

function GenerateCaptcha() {

    let a = dataGenertor();
    let boxes = document.querySelectorAll(".box")
    boxes.forEach((box, index) => {
        box.innerHTML = a[index]
    });
    return a;
};

function duration(){
    setTimeout(()=>{
        location.reload();
    },1000)
}



window.addEventListener("load", () => {

    let captcha = GenerateCaptcha();
    let btn = document.getElementById("btn");


    btn.addEventListener('click', () => {

        let input = document.getElementById("input").value;
        if (input !== "") {
            if (input === captcha) {
                let warning = document.getElementById("warning")
                warning.innerHTML = "CAPTCHA is correct";
                warning.style.color = "green";
                duration();
            }
            else {
                let warning = document.getElementById("warning")
                warning.innerHTML = "CAPTCHA is incorrect, reloading...";
                warning.style.color = "red";
               duration();
            }
        }
        else {
            alert("Enter value")
        }

    })
})
