function aMore(but, path, data)
{
	but.removeAttribute("onclick");
	but.innerHTML = "...";
	
	var req = xhr(path, data, 1, function(res) { document.getElementById("rMore").innerHTML = res; });
}
