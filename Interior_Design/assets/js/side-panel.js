function openNav() {
    document.getElementById("mySidepanel").style.width = "26%";
    document.getElementById("mySidepanel").style.padding = "10px 25px 25px 25px";
    document.getElementById("border").style.display ="block";
    // document.getElementById("mySidepanel").style.transition = "all 0.9s";
    function myFunction(x) {
      if (x.matches) { // If media query matches
        document.getElementById("mySidepanel").style.width = "100%";
      } else {
        document.getElementById("mySidepanel").style.width = "40%";
      }
    }
    
    var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time

    
   
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.padding = "0px";
    document.getElementById("border").style.display ="none";
  }