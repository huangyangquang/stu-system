<template>
	<div class="toast"
		v-if="over"
		:class="{
			fadein: showWrap,
			fadeout: !showWrap}">
		<div v-if="type == 'success'" style="color:green">
			<span>✔</span>{{msg}}
		</div>
		<div v-if="type == 'err'" style="color:red">
			<span>✖</span>{{msg}}
		</div>
		<div v-if="type == 'info'" style="color:blue">
			<span>❕</span>{{msg}}
		</div>
	</div>
</template>


<style scoped>
	.toast {
		position: fixed;
		top: 100px;
		left: 50%;
		transform: translateX(-50%);
	}
	.toast div {
		background-color: #ecd6d6;
		opacity: 0.6;
		text-align: left;
		line-height: 40px;
		min-width: 300px;
		height: 40px;
		border: 1px solid #000;
		border-radius: 4px;
		font-size: 20px;
		padding: 5px 15px;
	}
	.toast div span {
		margin-right: 20px;
	}
	.fadein {
		animation: in 0.3s;
	}
	.fadeout {
		animation: out 0.3s;
	}
	@keyframes in {
		0% {
			opacity: 0;
			top: 50px;
		}
		50% {
			top: 80px;
		}
		100% {
			opacity: 1;
			top: 100px;
		}
	}
	@keyframes out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	
</style>