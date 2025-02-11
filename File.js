function aFile()
{
	var inp = document.getElementById("val_2");
	var but = document.getElementById("val_3");
	var data = new FormData();
	
	data.append("val", inp.files[0]);
	
	but.removeAttribute("onclick");
	but.style.backgroundColor = "rgb(102, 47, 66)";
	
	var req = xhr("/php/aFile.php", data, null, function(res)
	{
		document.getElementById("val_1").innerHTML = res;
		
		but.setAttribute("onclick", "aUnFile();");
		but.style.backgroundColor = "rgb(153, 71, 100)";
		
		inp.value = null;
	});
}
