function getSquare() {
    if (!document.getElementById)
        return;
    var obj = document.getElementById("sidebar");
    return obj;
}

function hideSquare() {
    obj = getSquare();
    obj.style.display = "none";
}