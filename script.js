function xhr(url, data, enctype, cb)
{
	var req = new XMLHttpRequest;
	
	req.onreadystatechange = function()
	{ if(req.readyState == 4 && req.status == 200) cb(req.responseText); }
	
	req.open("POST", url, true);
	if(enctype == 1) req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send(data);
}
