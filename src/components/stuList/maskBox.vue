<template>
	<div class="mask-box"
		v-if="renderMask"
		v-show="showMask"
		@click.self="hideMask">
		<div class="mask">
			<form class="changeForm">
				<div>
					<label for="name">姓名</label>
					<input type="text" id="name" name="name" 
						:value="stu.name" 
						@change="addTempStu('name', $event.target.value)"/>
				</div>
				<div class="sex">
					<span>性别</span>
					<div>
						<input type="radio" id="man" name="sex" value="0" 
							checked="stu.sex == 0"
							@change="addTempStu( 'sex', parseInt($event.target.value) )">
						<label for="man">男</label>
					</div>
					<div>
						<input type="radio" id="sex" name="sex" value="1" 
							checked="stu.sex == 1"
							@change="addTempStu( 'sex', parseInt($event.target.value) )">
						<label for="woman">女</label>
					</div>
					
				</div>
				<div>
					<label for="sNo">学号</label>
					<input type="text" id="sNo" name="sNo" 
						:value="stu.sNo" 
						readonly>
				</div>
				<div>
					<label for="email">邮箱</label>
					<input type="text" id="email" name="email" 
						:value="stu.email"
						@change="addTempStu('email', $event.target.value)">
				</div>
				<div>
					<label for="birth">出生年</label>
					<input type="text" id="birth" name="birth" 
						:value="stu.birth"
						@change="addTempStu('birth', $event.target.value)">
				</div>
				<div>
					<label for="phone">手机号</label>
					<input type="text" id="phone" name="phone" 
						:value="stu.phone"
						@change="addTempStu('phone', $event.target.value)">
				</div>
				<div>
					<label for="address">地址</label>
					<input type="text" id="address" name="address" 
						:value='stu.address'
						@change="addTempStu('address', $event.target.value)">
				</div>
				<div class="btn">
					<input type="button" value="修改" class="changeStu" @click="changeStu">
					<input type="button" value="重置" class="resetStu">
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	import Api from '@/api.js'


	export default {
		data() {
			return {
				renderMask: false,
				showMask: true,
				tempStu: {}
			}
		},
		created() {
			// 通过eventBus来实现兄弟组件间的通信 遮罩层的显示与隐藏
			this.bus.$on('click', () => {
				this.renderMask = true;
				this.showMask = true;
			})
		},
		methods: {
			...mapActions(['setStu_updateStu']),
			hideMask() {
				this.showMask = false;
			},
			addTempStu(key, value) {
				// console.log(key, typeof value);
				this.tempStu[key] = value;
			},
			changeStu() {
				const stu = Object.assign({}, this.stu, this.tempStu);
				// console.log(stu);
				this.setStu_updateStu(stu);
			}
		},
		computed: {
			...mapState(['stu'])
		}

	};
</script>



