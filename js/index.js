console.log("test js");
document.onreadystatechange = function () {
    console.log(document.readyState)
    if(document.readyState == 'interactive') {
        console.log("c'est ok")

        let element= document.getElementsByClassName("a1");
        element[0].style.color = "green";

        let h1Element= document.getElementById("my_id");
        h1Element.style.fontSize = "10px";
        h1Element.style.color = "red";
        h1Element.style.backgroundColor = "gold";

        let h2Elements = document.querySelectorAll("h2");

        h2Elements.forEach(function(element, index) {
            if (index === 0) {
                element.style.fontSize = "10px";
            } else if (index === 1) {
                element.style.fontSize = "20px";
            } else if (index === 2) {
                element.style.fontSize = "30px";
            }
        });
        let elementsWithC1Class = document.querySelectorAll(".c1");
        elementsWithC1Class.forEach(function(element) {
            element.style.color = "purple";
        });

        let elementss=document.getElementById("id2");

        console.log("Contenu avec InnerText",elementss.innerText);
        console.log("Contenu avec InnerText",elementss.innerHTML);
        console.log("Contenu avec TextContent", elementss.textContent);



        let button = document.querySelector('input[name="b_valid"]');
        let paragraph = document.querySelector("#myDiv p");
        let initColor = document.getElementById("myDiv").style.backgroundColor
        button.addEventListener("click", function() {
            if (paragraph.style.backgroundColor === "gray") {
                paragraph.style.backgroundColor = "red";
                button.style.backgroundColor="blue";
                paragraph.style.backgroundColor= initColor;
            } else {
                paragraph.style.backgroundColor = "gray";
                button.style.backgroundColor="";
                button.style.backgroundColor="yellow";

            }
        });

        let colorInput = document.querySelector('#myDiv2 input[type="color"][name="b_valid"]');
        let paragraph2 = document.querySelector("#myDiv2 p");

        colorInput.addEventListener("change", function () {
            paragraph2.style.color = colorInput.value;
        });

        let colorInput2 = document.querySelector('#myDiv2 input[type="color"][name="b_valider2"]');
        colorInput2.addEventListener("change", function () {
            paragraph2.style.color = colorInput2.value;
        });
        let numberInput = document.getElementById("numberInput");
        numberInput.addEventListener("change", function() {
            let value = parseFloat(numberInput.value);
            if ( value < 0 || value > 20) {
                alert("Le nombre saisie n'est pas compris entre 0 et 20")
            }
        });


        document.addEventListener("DOMContentLoaded", function() {
            let tButton = document.getElementById("tButton");
            let lyceeParagraph = document.getElementById("lycee");
            let switchInput = document.querySelector('.switch input[type="checkbox"]');

            tButton.addEventListener("change", function() {
                if (switchInput.checked) {
                    lyceeParagraph.textContent = "Lycee Astier";
                } else {
                    lyceeParagraph.textContent = "";
                }
            });
        });

        document.addEventListener("DOMContentLoaded", function (){
            let button_dark = document.getElementById("checkbox");
            button_dark.addEventListener("change", function (){
                if (this.checked){
                    document.body.classList.add("dark-mode");
                }else{
                    document.body.classList.remove("dark-mode");
                }
            });
        });
        document.querySelector('.switch-container input[type="checkbox"]').addEventListener('change', function() {
            var lyceeText = document.getElementById('lycee');


            if (this.checked) {
                lyceeText.style.display = 'block';
            } else {
                lyceeText.style.display = 'none';
            }
        });
    }
}




