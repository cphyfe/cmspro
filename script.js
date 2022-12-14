var plc = document.findElementById("sb");
plc.onfocus = function plcvanish {
	if (this.value == document.findElementById("sb").value) {
  	return null;
  } else {
  	document.findElementById("sb").value === "";
  }
}
