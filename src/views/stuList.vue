<template>
	<div class="stu-List-box">
		<search-words></search-words>
		<stu-table></stu-table>
		<turn-page></turn-page>
		<mask-box></mask-box>
	</div>
</template>

<script type="text/javascript">
	import searchWords from '@/components/stuList/searchWords'
	import stuTable from '@/components/stuList/stuTable'
	import turnPage from '@/components/stuList/turnPage'
	import maskBox from '@/components/stuList/maskBox'


	export default {
		components: {
			searchWords,
			stuTable,
			turnPage,
			maskBox
		}
	};
</script>