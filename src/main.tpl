<div id='main'>
	<div id="left">
		<div id="logo"><h1><a href="">{{ config.blog_name }}</a></h1></div>
		<div id="catelog">
			<ul>
				<li v-for="(i, item) in catelog">
					<a v-link="{ name:'list', params:{path:item.path}}"> {{ item.title }} </a>
				</li>
			</ul>
		</div>
		<div id="info">
			<a class="info_about" v-link="{ path: '/about'}">关于</a>
			<a class="info_right">Copyright © 2015</a>
			<div class="clear"></div>
		</div>
	</div>
	<div id="right">
		<router-view></router-view>
	</div>
</div>

