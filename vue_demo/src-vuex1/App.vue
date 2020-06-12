<template>
	<div>
		<p>clicked：{{count}} times,count is {{oddOrEvent}}</p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">increment if odd</button>
		<button @click="incrementAsync">increment async</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		computed: {
			...mapState(['count']),
			...mapGetters(['oddOrEvent'])//...mapGetters({oddOrEvent1:'oddOrEvent'})
			/*count() {
				return this.$store.state['count'];
			},
			oddOrEvent() {
				return this.$store.getters['oddOrEvent'];
			}*/
		},
		methods:{
			...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
			/*increment(){
				//通知vuex去增加
				this.$store.dispatch('increment');
			},
			decrement(){
				this.$store.dispatch('decrement');
			},
			//如果是奇数就增加1
			incrementIfOdd(){
				this.$store.dispatch('incrementIfOdd');
			},
			//过一秒才增加，模拟异步操作
			incrementAsync(){
				this.$store.dispatch('incrementAsync');
			}*/
		}
	}
</script>

<style>

</style>