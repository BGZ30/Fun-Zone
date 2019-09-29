function showMainMenu(btn,className,disp){
	// Get a NodeList of all .demo elements
  var btnCol=document.getElementById(btn);
  btnCol.style.opacity=0.5;
  var menus = document.querySelectorAll(className);
	// Change the text of multiple elements with a loop
	menus.forEach(element => {element.style.display = disp;})

}
