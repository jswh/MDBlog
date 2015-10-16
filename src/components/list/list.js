require('./list.scss');

module.exports = {
	template: require('./list.tpl'),
	data: function () { return { list:[], listStore: [],page:{title:''} }; },
	route: {
		data : function () {
			var path = this.$route.params.path;
			this.page.title = path.split('/').pop();
			GH.getList(path, function (res) {
				this.$set('list', []);
				this.$set('listStore', []);
				var fileCount = 0;
				for (var i = 0; i < res.length; i ++) {
					var listItem = {};
					listItem.fileName = res[i].name;
					listItem.title = res[i].name.split('.')[0];
					listItem.source = res[i].download_url;
					listItem.path = res[i].path;
					listItem.content = '';
					listItem.loaded = true;
					listItem.sha = res[i].sha;
					if (listItem.title) {
						if (fileCount < 5) {
							this.list.push(listItem);
						} else {
							this.listStore.push(listItem);
						}
					}
					fileCount ++;
				}
			}.bind(this));
		}
	},
	methods: {
		expand: function(e) {
			toggleContent($(e.target).closest('.content'));
		}
	},
};

function toggleContent($el) {
	if ($el.hasClass('retractile')) {
		$el.removeClass('retractile');
	} else {
		$el.addClass('retractile');
	}
}

