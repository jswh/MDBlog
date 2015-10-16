
var loadContent = function (listItem) {
	var cache = localStorage.getItem(listItem.path);
	if (cache) {
		var cachedItem = JSON.parse(cache);
		if (cachedItem.sha === listItem.sha) {
			listItem.content = MD.parse(cachedItem.content);
			listItem.loaded = true;
			return;
		}
	}

	$.get(listItem.source, {}, function (res) {
		localStorage.setItem(listItem.path, JSON.stringify({
			sha: listItem.sha,
			content: res
		}));
		listItem.content = MD.parse(res);
		listItem.loaded = true;
	}.bind(this));
};

var markdown = function (content) {
	var rtn = '';
	try {
		rtn = MD.parse(content);
	} catch (e) {
		rtn = content;
	}

	return rtn;
};
module.exports = {
	directive: {
		loadContent: loadContent
	},
	filter: {
		markdown: markdown
	}
};
