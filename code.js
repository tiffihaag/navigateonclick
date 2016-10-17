var locations = {"data":[], "index":-1};
var actions = {};
actions.next = function(){
	if(locations.index < locations.data.length-1)locations.index++;
	actions.go();
}

actions.previous = function(){
	if(locations.index > 0)locations.index--;
	actions.go();
}

actions.go = function(){
	var containerRect = $("article")[0].getBoundingClientRect();
	$("article main").css({
		"left": (containerRect.left-locations.data[
			locations.index].left)+"px",
		"top": (containerRect.top-locations.data[
			locations.index].top)+"px"
	});
}

window.addEventListener("load", function(){
	$.each($('article main > *'), function(){
		var rect = this.getBoundingClientRect();
		locations.data.push({"left":parseInt(rect.left), "top":parseInt(rect.top)});
		$.each($('article nav > *'), function() {
			$this.on("click", actions[ $(this).attr("data-action")]);
		});
	});