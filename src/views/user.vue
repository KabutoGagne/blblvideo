<template>
	<div class="back">
		<nav-bar></nav-bar>
		<!-- 菜单栏渲染头像；无头像指定默认头像
				<nav-bar :imgPath="model.user_img"></nav-bar> 
		-->
		
		<div class="pic"></div>
		<user-info :userInfo="model" @editProfile="editProfile"></user-info>
	</div>
</template>

<script>
	import navBar from '@/components/common/navBar.vue';
	import userInfo from '../components/user/userInfo.vue';
	export default {
		data() {
			return {
				model:{}
			}
		},
		components:{
			navBar,userInfo
		},
		created() {
			this.getUserInfo();
		},
		methods:{
			async getUserInfo() {
				const {data: res} =await this.$http.get('/user/'+localStorage.getItem("id"),{
					headers:{'Authorization':'Bearer'+ localStorage.getItem('token')}
				})
				// this.model =res[0]
				console.log(res);
			},
			editProfile() {
				this.$router.push('/edit');
			}
		}
	}
</script>

<style scoped lang="scss">
	.back {
		width:100%;height:100%;background-color:#e5e5e5;
	}
	.pic {
		width:100%;height:80px;background-color: goldenrod;
		// background-image: url(../assets/logo.png);
	}
</style>
