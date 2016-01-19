<div id="list">
	<div class="post">
		<div class="content">
			<a class="title" v-link="{name:'single', params:{path:post.path}}">{{ post.title }}</a>
			{{{ post.content }}}
		</div>
	</div>
	<div class="clear">
		<a href="https://github.com/jswh/MDBlog/commits/master/{{post.path}}">history</a>
	<div>
</div>
