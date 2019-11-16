<template>
	<form class="newStu-form add-stu-box">
				<span>
					<label for="name">姓名</label>
					<input type="text" id="name" name="name" />
				</span>
				<span>
					<span>性别</span>
					<input type="radio" id="man" name="sex" value="0" checked>
					<label for="man">男</label>
					<input type="radio" id="woman" name="sex" value="1">
					<label for="woman">女</label>
				</span>
				<span>
					<label for="sNo">学号</label>
					<input type="text" id="sNo" name="sNo">
				</span>
				<span>
					<label for="email">邮箱</label>
					<input type="text" id="email" name="email">
				</span>
				<span>
					<label for="birth">出生年</label>
					<input type="text" id="birth" name="birth">
				</span>
				<span>
					<label for="phone">手机号</label>
					<input type="text" id="phone" name="phone">
				</span>
				<span>
					<label for="address">地址</label>
					<input type="text" id="address" name="address">
				</span>
				<span>
					<input type="submit" value="添加" class="addStu">
					<input type="reset" value="重置" class="resetStu">
				</span>
	</form>
</template>