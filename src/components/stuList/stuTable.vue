<template>
	<table class="stuTable" border="0">
		<thead>
			<tr>
				<th>学号</th>
				<th>姓名</th>
				<th>性别</th>
				<th>年龄</th>
				<th>邮箱</th>
				<th>地区</th>
				<th>手机号</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(stu, index) in stuList" :key="index">
				<td>{{stu.sNo}}</td>
				<td>{{stu.name}}</td>
				<td>{{stu.sex == 0 ? '男' : '女'}}</td>
				<td>{{new Date().getFullYear() - stu.birth}}</td>
				<td>{{stu.email}}</td>
				<td>{{stu.address}}</td>
				<td>{{stu.phone}}</td>
				<td>
					<button class="delStu"
									@click="delStu(stu.sNo)">
						删除
					</button>
					<button class="changeStuInfo"
									@click="changeStuInfo(stu, index)">
						修改
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	import {mapState, mapActions, mapMutations} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		mounted() {
			this.setStuList_findByPage();
		},
		computed: {
			...mapState(['stuList'])
		},
		methods: {
			...mapActions(['setStuList_findByPage', "delBySno"]),
			...mapMutations(['setStu']),
			changeStuInfo(stu, index) {
				// 通过eventBus来实现兄弟组件间的通信 遮罩层的显示与隐藏
				this.bus.$emit('click');
				// 传递payload
				this.setStu({ stu, index })
			},
			delStu(sNo) {
				this.delBySno(sNo).then(() => {
					this.setStuList_findByPage();	
				});
			}
		}
	};
</script>

<style scoped>
	button {
		margin: 0px 2px;
	}
</style>