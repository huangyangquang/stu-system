<template>
	<div class="turnPage">
		<ul class="box">
			<!-- 小于7页 -->
			<template v-if="totalPage <= 7">
				<li class="pre-page"
					:class="{notAllow: curPage == 1}"
					@click="setCurPage('pre')">
					上一页
				</li>
				<li v-for="i in totalPage"
					class="num"
					:class="{curPage: i == curPage}"
					@click="setCurPage(i)">
					{{i}}
				</li>
				<li class="next-page"
					:class="{notAllow: curPage == totalPage}"
					@click="setCurPage('next')">
					下一页
				</li>
			</template>
			<!-- 大于7页 -->
			<template v-if="totalPage > 7">
				<li class="pre-page"
					:class="{notAllow: curPage == 1}"
					@click="setCurPage('pre')">
					上一页
				</li>
				<li class="num"
					:class="{curPage: 1 == curPage}"
					@click="setCurPage(1)">1</li>
					<!-- curPage <= 4 -->
				<template v-if="curPage <= 4">
					<li v-for="i in 5"
						class="num"
						:class="{curPage: i + 1 == curPage}"
						@click="setCurPage(i + 1)">{{i + 1}}</li>
					<li>...</li>
				</template>
					<!-- curPage > 4 && curPage < totalPage - 4 -->
				<template v-if="curPage > 4 && curPage < totalPage - 4">
					<li>...</li>
					<!-- i 从 1 开始 -->
					<li v-for="i in 5"
						class="num"
						:class="{curPage: i + curPage - 3 == curPage}"
						@click="setCurPage(i + curPage - 3)">{{ i + curPage - 3 }}</li>
					<li>...</li>
				</template>
					<!-- curPage >= totalPage - 4 -->
				<template v-if="curPage >= totalPage - 4">
					<li>...</li>
					<li v-for="i in 5"
						class="num"
						:class="{curPage: i + totalPage - 6 == curPage}"
						@click="setCurPage(i + totalPage - 6)">{{i + totalPage - 6}}</li>
				</template>
				<li class="num"
					:class="{curPage: totalPage == curPage}"
					@click="setCurPage(totalPage)">{{totalPage}}</li>
				<li class="next-page"
					:class="{notAllow: curPage == totalPage}"
					@click="setCurPage('next')">
					下一页
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	export default {
		data() {
			return {
				// curPage: 1,
				// totalPage: 10
				// searchFlag: false
			}
		},
		computed: {
			...mapState(['curPage', 'search']),
			...mapState({
				totalPage: state => Math.ceil(state.stuTotal / state.size)
			})
		},
		methods: {
			...mapMutations(['setStuTotal']),
			...mapMutations({
				setCurPage_vuex: "setCurPage"
			}),
			setCurPage(flag) {
				let curPage = null;
				if(flag == 'pre') {
					if(this.curPage == 1) {
						return;
					}
					curPage = this.curPage - 1
				} else if(flag == 'next') {
					if(this.curPage == this.totalPage) {
						return;
					}
					curPage = this.curPage + 1
				} else {
					curPage = flag;
				}
				this.setCurPage_vuex(curPage);
				if(this.search !== '') {
					this.$store.dispatch('searchStudent')
				} else {
					this.$store.dispatch('setStuList_findByPage')
				}
				
				
			}
		}
	};
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
		list-style-type: none;
	}
	.turnPage .box li{
		float: left;
		margin: 0px 5px;
		width: 20px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		cursor: pointer;
		
	}
	.turnPage .box li.pre-page,
	.turnPage .box li.next-page {
		width: 60px;
	}
	.turnPage .box li.curPage {
		color: #409EFF;
	}
	.turnPage .box li.notAllow {
		opacity: 0.3;
		color: #000;
		cursor: not-allowed;
	}
	.turnPage .box li:not(.notAllow):hover{
		color: #409EFF;
	}


</style>