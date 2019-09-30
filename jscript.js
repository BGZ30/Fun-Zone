
function showMainMenu(btn,className,disp){
	// Get a NodeList of all .demo elements
 
  var menus = document.querySelectorAll(className);
	// Change the text of multiple elements with a loop
	menus.forEach(element => {element.style.display = disp;})
}
