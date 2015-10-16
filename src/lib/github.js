var api = 'https://api.github.com/repos/jswh/jswh.github.io/contents/docs';
var getList = function(callback) {
	$.get(api, {}, function(res) {
		var rtn = [];
		$.each(res, function(key, value) {
			if(value.type == 'file') {
				rtn.push({
					'url': value.download_url,
					'name': value.name
				});
			}
			callback(rtn);
		})
	})
};

module.exports = {
	getList: getList
};

