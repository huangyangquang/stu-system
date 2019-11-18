<template>
	<form class="newStu-form add-stu-box">
				<span>
					<label for="name">姓名</label>
					<input type="text" id="name" name="name" 
							v-model="tempStu.name"/>
				</span>
				<span>
					<span>性别</span>
					<input type="radio" id="man" name="sex" value="0" 
							v-model="tempStu.sex"	
							checked="tempStu.sex == 0">
					<label for="man">男</label>
					<input type="radio" id="woman" name="sex" value="1"
							v-model="tempStu.sex"
							checked="tempStu.sex == 1">
					<label for="woman">女</label>
				</span>
				<span>
					<label for="sNo">学号</label>
					<input type="text" id="sNo" name="sNo"
							v-model="tempStu.sNo">
				</span>
				<span>
					<label for="email">邮箱</label>
					<input type="text" id="email" name="email"
							v-model="tempStu.email">
				</span>
				<span>
					<label for="birth">出生年</label>
					<input type="text" id="birth" name="birth"
							v-model="tempStu.birth">
				</span>
				<span>
					<label for="phone">手机号</label>
					<input type="text" id="phone" name="phone"
							v-model="tempStu.phone">
				</span>
				<span>
					<label for="address">地址</label>
					<input type="text" id="address" name="address"
							v-model="tempStu.address">
				</span>
				<span>
					<input type="button" value="添加" class="addStu"
							@click="addStu">
					<input type="button" value="重置" class="resetStu"
							@click="resetStu">
				</span>
	</form>
</template>

<script>
	import Api from '@/api.js'
	export default {
		data() {
			return {
				tempStu: {
					name: '',
					sNo: '',
					sex: 0,
					phone: '',
					address: '',
					email: '',
					birth: ''
				}
			}
		},
		methods: {
			addStu() {
				Api.addStudent(this.tempStu).then(res => {
					alert(res.data.msg)
				}).catch(err => {
					alert(err);
				})
			},
			resetStu() {
				for(const prop in this.tempStu) {
					if(prop == 'sex') {
						this.tempStu[prop] = 0;
					} else {
						this.tempStu[prop] = '';
					}
				}
			}
		}

	}





</script>