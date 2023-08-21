let result = document.getElementById("print");
function display(values) {
    result.value += values;
}
function calculate() {
    var final_t = result.value;
    var final_r = eval(final_t);
    result.value = final_r;
}
function allclrear() {
    result.value = "";
}
function onedelete() {
    result.value = result.value.slice(0, -1);
}