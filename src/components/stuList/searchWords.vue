<template>
	<div class="search-box">
		<input type="text" 
				class="search" 
				placeholder="按邮箱 / 学号 查询">
		<button class="btn"
				@click="searchBtn">搜索</button>
	</div>
</template>

<script>
	import { mapActions, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			...mapMutations(['setCurPage', 'setSearch']),
			...mapActions(['searchStudent', 'setStuList_findByPage']),
			searchBtn() {
				const search = document.getElementsByClassName('search')[0].value;
				if(search !== '') {
					this.setCurPage(1);
					this.setSearch(search);
					this.searchStudent();
				} else {
					this.setStuList_findByPage();
				}
			}
		}
	}








</script>