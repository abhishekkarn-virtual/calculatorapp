const btns = document.querySelectorAll(".numbers")

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let style = e.currentTarget.classList;

        if (style.contains("one")) {
            document.getElementById("scrdata").innerText += 1;
        }

        if (style.contains("two")) {
            document.getElementById("scrdata").innerText += 2;
        }

        if (style.contains("three")) {
            document.getElementById("scrdata").innerText += 3;
        }

        if (style.contains("four")) {
            document.getElementById("scrdata").innerText += 4;
        }

        if (style.contains("five")) {
            document.getElementById("scrdata").innerText += 5;
        }

        if (style.contains("six")) {
            document.getElementById("scrdata").innerText += 6;
        }

        if (style.contains("seven")) {
            document.getElementById("scrdata").innerText += 7;
        }

        if (style.contains("eight")) {
            document.getElementById("scrdata").innerText += 8;
        }

        if (style.contains("nine")) {
            document.getElementById("scrdata").innerText += 9;
        }

        if (style.contains("zero")) {
            document.getElementById("scrdata").innerText += 0;
        }

        if (style.contains("minus")) {
            document.getElementById("scrdata").innerText += "-";
        }

        if (style.contains("mult")) {
            document.getElementById("scrdata").innerText += "*";
        }

        if (style.contains("add")) {
            document.getElementById("scrdata").innerText += "+";
        }

        if (style.contains("decimal")) {
            document.getElementById("scrdata").innerText += ".";
        }

        if (style.contains("divide")) {
            document.getElementById("scrdata").innerText += "/";
        }

        if (style.contains("delete")) {
            let lastDel = document.getElementById("scrdata").innerText;
            lastDel = lastDel.slice(0, lastDel.length - 1);
            document.getElementById("scrdata").innerText = lastDel;
        }

        if (style.contains("equals")) {
            const data = document.getElementById("scrdata").innerText;
            const result = eval(data);
            document.getElementById("scrdata").innerText = result;
        }
        if (style.contains("clear")) {
            document.getElementById("scrdata").innerText = "";
        }

    })
});