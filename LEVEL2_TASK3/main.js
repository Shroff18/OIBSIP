let addlist = document.getElementById("add");

addlist.addEventListener("click", function () {
    let input_value = document.getElementById("to_do_value");
    let value = input_value.value;
    if (value != '') {
        let main_box = document.getElementById("main");

        let to_do_div = document.createElement("div")
        to_do_div.className = "to-do-list";
        to_do_div.id = "task-list";
        main_box.appendChild(to_do_div);

        let input = document.createElement("li");
        input.className = "word_list";
        to_do_div.appendChild(input);

        let input_li = document.createElement("input");
        input_li.className = "input_in_list";
        input_li.type = 'text';
        input_li.readOnly = true;
        input_li.value = value;
        input.appendChild(input_li);

        let btn1 = document.createElement("button");
        btn1.className = "btnn btn_edit";
        btn1.id = "btn_edit";
        btn1.textContent = "Edit";
        to_do_div.appendChild(btn1);

        let btn2 = document.createElement("button");
        btn2.className = "btnn btn_delete";
        btn2.id = "btn_delete";
        btn2.textContent = "Delete";
        to_do_div.appendChild(btn2);

        let line_break = document.createElement("br");
        line_break.id = 'br'
        to_do_div.after(line_break);

        input_value.value = ""

        btn2.addEventListener("click", function () {
            btn2.parentElement.remove();
            let br_rmv = document.getElementById("br")
            br_rmv.remove();
        })
        btn1.addEventListener("click", function () {
            if (btn1.innerText == "Edit") {
                btn1.innerText = "Save";
                input_li.readOnly = false;
            } else {
                btn1.innerText = "Edit";
                input_li.readOnly = true;
            }
        })
    }


});
