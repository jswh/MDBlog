<div id="list">
	<div class="post">
		<div class="content">
			<a class="title" v-link="{name:'single', params:{path:post.path}}">{{ post.title }}</a>
			{{{ post.content }}}
		</div>
	</div>
	<div class="clear history">
		<a target="_blank" href="{{config.github_address}}/commits/master/{{post.path}}">« History »</a>
	<div>
</div>
