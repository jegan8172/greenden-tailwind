var sidenav = document.getElementById("sidenav");
var menuicons = document.getElementById("menuicons");
var closenav = document.getElementById("closenav");

menuicons.addEventListener("click", function () {
  sidenav.style.right = "0";
});

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

//product search

var productcontainer = document.getElementById("productcont");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup",function(){
  var searchedvalue = event.target.value.toUpperCase();

  for (count = 0;count<productlist.length;count=count + 1) 
{
    var productname = productlist[count].querySelector("p").textContent;
        
    if (productname.toUpperCase().indexOf(searchedvalue)<0) 
        {
      productlist[count].style.display = "none";
    } 
    else {
      productlist[count].style.display = "block";
    }
  }
});
