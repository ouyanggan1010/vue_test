<template>
	<div>
		<h2>Home组件</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link to="/home/news">News</router-link>
				</li>
				<li>
					<router-link to="/home/message">Message</router-link>
				</li>
			</ul>
			<div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>

</style>