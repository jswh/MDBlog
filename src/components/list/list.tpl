<div id="catename">{{ page.title }}</div>
<div id="list"> 
	<div class="post not-load" v-for="item in list" v-show='item.loaded' v-load-content="item">
		<div class="content retractile" v-on:click="expand">
			<a class="title" v-link="{name:'single', params:{path:item.path}}">{{ item.title }}</a>
		{{{ item.content }}}
		</div>
	</div>
</div>

