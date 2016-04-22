window.MD = require('markdown');
window.GH = require('./lib/github.js');
var lib = require('./lib/lib.js');
require('./main.scss');

var $d = $(document);
var $w = $(window);

Vue.config.debug = false;
Vue.directive('load-content', lib.directive.loadContent);//bind(this)?

var router = new VueRouter({hashbang : false});
router.map({
	'/single/*path': {
		name: "single",
		component: Vue.extend(require('./components/single/single'))
	},
	'/cate/*path': {
		name: 'list',
		component: Vue.extend(require('./components/list/list'))
	}
});
router.redirect({
	'/' : window.config.default_page
});
router.start(Vue.extend({
	template:require('./main.tpl'),
	data: function () {
		return {
			config: window.config,
			catelog: [],
			page:{ title:window.config.blog_name, source:"地址1", cached:false },
		};
	},
	ready: function () {
		GH.getList('', function (res) {
			for (var i = 0; i < res.length; i++) {
				if (res[i].type == 'dir') {
					this.catelog.push({
						title: res[i].name,
						path: res[i].path,
						source: res[i].url,
					});
				}
			}
		}.bind(this));

		$d.scroll(function(e) {
			if ((($d.scrollTop() + $w.height()) / $d.height()) > 0.9) {
			}
		}.bind(this));
	},
}), '#blog');
