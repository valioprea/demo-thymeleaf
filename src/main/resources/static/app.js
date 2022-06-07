document.getElementById("button").onclick = () => {
    if(document.getElementById("yep").className == "first" ) {
        document.getElementById("yep").className = "second";
    } else {
        document.getElementById("yep").className = "first";
    }
}