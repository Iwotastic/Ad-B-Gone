function check() {
	var url = event.url;
	var ans = safari.self.tab.canLoad(event, url);
	if (ans == "block") {
		event.preventDefault();
	}
}
 document.addEventListener("beforeload", check, true);