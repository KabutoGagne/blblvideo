<template>
	<div class="back">
		<login-header middleContent="用户登录">
			<div slot="right" @click="$router.push('/register')">忘记密码?</div>
		</login-header>
		
		<van-form  @submit="login()">
			<van-cell-group class="content">
				<van-field v-model="loginInfo.username" label="账号" placeholder="输入账号"/>
				<van-field v-model="loginInfo.password" label="密码" placeholder="输入密码" type="password"/>
			</van-cell-group>
			<van-button type="default" class="signinBtn">登录</van-button>
		</van-form>
	</div>
</template>

<script>
	import loginHeader from '@/components/common/loginHeader.vue'
	export default {
		data() {
			return {
				loginInfo:{
					username:"",password:""
				}
			}
		},
		components:{
			loginHeader
		},
		methods:{
			async login() {
				const {data:res} =await this.$http.post('/login',
					this.loginInfo
				)
				if(res.code !==200) {
					console.log(res);
					return this.$message.fail(res.msg);
				}
				this.$message.success(res.msg);
				localStorage.setItem("id",res.id);
				localStorage.setItem("token",res.token);
				setTimeout(()=>{this.$router.push('/home')},1000)
				
			}
		}
	}
</script>

<style>
	.back {
		width:100%;height:100%;background-color: #e5e5e5;
	}
	.content {
		margin-bottom: 20px;
	}
	.signinBtn {
		height:45px;
		background-color: #ffadb4;
		width:100%;
		color: white;
		border-radius: 15px;
	}
</style>
