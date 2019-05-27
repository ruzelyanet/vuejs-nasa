<template>
	<div>		
		<input 
			type="text" 			
			:value="msg" 
			@input="changeMess">			
		<p>
			{{ mess }}
		</p>
	</div>
</template>

<script>
	export default {
		props: ['msg'],
		data () {
			return {
				mess: ''
			}
		},
		methods: {
			changeMess(event) {
				this.mess = event.target.value;
				this.$emit('messChange', this.mess);
			},
			addItem(event) {
				console.log(123);
			}
		}
	}
</script>		
