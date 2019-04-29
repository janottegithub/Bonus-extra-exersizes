/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */



(function() {
    // to get the value of an input: document.getElementById("element-id").value


    function performOperation (operation) {
        var fieldone = document.getElementById("one").value;
        var fieldtwo = document.getElementById("two").value;
        switch (operation){
            case "addition":
            var result = fieldone+fieldtwo;
            //if ((this).value("true")) {alert("result")};
            alert (result);
            break;
            case "substraction":
            var result = fieldone-fieldtwo;
            alert (result);
            break;
            case "multiplication":
            var result = fieldone*fieldtwo;
            alert (result);
            break;
            case "division":
            var result = fieldone/fieldtwo;
            alert (result);
            break;
        }
    };



    Array.from(document.querySelectorAll("button.operator")).forEach(function(btn) {
        btn.addEventListener("click", function () {
            performOperation(btn.id);
        });

    });
})();
