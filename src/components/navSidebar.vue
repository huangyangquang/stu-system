<template>
	<ul class="sidebar-nav">
			<h4>学生管理</h4>
			<!-- data-id用于切换页面展示 -->
			<!-- <li class="active" data-id="stu-List-box">学生列表</li>
			<li data-id="add-stu-box">新增学生</li> -->
			<router-link 
				class="active" 
				data-id="stu-List-box"
				to="/stuList"
				tag="li">
				学生列表
			</router-link>
			<router-link 
				data-id="add-stu-box"
				to="/addStu"
				tag="li">
				新增学生
			</router-link>
		</ul>
</template>
		