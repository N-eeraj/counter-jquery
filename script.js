$(document).ready(function () {
    
    const counter = $("span");
    const add = $("#add");
    const sub = $("#sub");
    let count = counter.text();

    add.on("click", () => counter.text(++count));
    sub.on("click", () => counter.text(--count));

});