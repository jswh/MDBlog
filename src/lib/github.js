var api = 'https://api.github.com/repos/jswh/jswh.github.io/contents/docs';
var content = 'https://raw.githubusercontent.com/jswh/jswh.github.io/master/';

var getFileContent = function (path, callback) {
	$.get(content + path, {}, callback);
}

var getList = function(path, callback) {
	
	path = path.replace('docs/', '');
	$.get(api + '/' + path, {}, callback);
};

module.exports = {
	getList: getList,
	getContent: getFileContent
};

