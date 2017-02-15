// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    var btn = document.getElementById("button");
    var clearBtn = document.getElementById("clearBtn");
    btn.addEventListener("click", function() {
        console.log("btn Clicked");

        var shape = document.createElement("div");
        var ht = getRandomString()+"px";
        var wd = getRandomString()+"px";
        console.log("ht"+ht);
        shape.style.borderRadius= "30px";
        shape.style.height = ht;
        console.log("height "+shape.style.height);
        shape.style.width = wd;
        shape.style.background = "red";
        shape.style.color = "black";
        shape.style.marginLeft = ht;
        shape.style.marginTop = wd;
        // shape.innerHTML = "Hello";

        document.getElementById("shapes").appendChild(shape);


    });
    function getRandomString(){
      var num = Math.floor((Math.random() * 100) + 1);
      return num;
    }

});
