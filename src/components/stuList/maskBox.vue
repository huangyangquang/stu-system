<template>
	<div class="mask-box">
		<div class="mask">
			<form class="changeForm">
				<div>
					<label for="name">姓名</label>
					<input type="text" id="name" name="name" />
				</div>
				<div class="sex">
					<span>性别</span>
					<div>
						<input type="radio" id="man" name="sex" value="0">
						<label for="man">男</label>
					</div>
					<div>
						<input type="radio" id="woman" name="sex" value="1">
						<label for="woman">女</label>
					</div>
					
				</div>
				<div>
					<label for="sNo">学号</label>
					<input type="text" id="sNo" name="sNo">
				</div>
				<div>
					<label for="email">邮箱</label>
					<input type="text" id="email" name="email">
				</div>
				<div>
					<label for="birth">出生年</label>
					<input type="text" id="birth" name="birth">
				</div>
				<div>
					<label for="phone">手机号</label>
					<input type="text" id="phone" name="phone">
				</div>
				<div>
					<label for="address">地址</label>
					<input type="text" id="address" name="address">
				</div>
				<div class="btn">
					<input type="submit" value="修改" class="changeStu">
					<input type="reset" value="重置" class="resetStu">
				</div>
			</form>
		</div>
	</div>
</template>