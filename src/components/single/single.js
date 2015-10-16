require('../list/list.scss');

module.exports = {
	template: require('./single.tpl'),
	data: function () { 
		return {
			post: {
				title: '',
				content: ''
			},
		};
	},
	route: {
		data : function () {
			var path = this.$route.params.path;
			GH.getContent(path, function (res) {
				this.post.title = path.split('/').pop().split('.')[0];
				this.post.content = MD.parse(res);
			}.bind(this));
		}
	},
	methods: {
		expand: function(e) {
			toggleContent($(e.target).closest('.content'));
		}
	}
};

function toggleContent($el) {
	if ($el.hasClass('retractile')) {
		$el.removeClass('retractile');
	} else {
		$el.addClass('retractile');
	}
}
