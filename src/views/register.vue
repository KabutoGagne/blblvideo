<template>
	<div class="back">
		<login-header middleContent="注册账号">
			<!-- 使用插槽 -->
			<div slot="right" @click="$router.push('/login')">登录</div>
		</login-header>
		
		<van-form @failed="onFailed" @submit="registerSumbit()">
			<van-cell-group style="margin: 10px 0 15px;">
				<van-field v-model="userInfo.name" label="用户名" placeholder="输入用户名" class="usersname"/>
			</van-cell-group>
			<van-cell-group>
				<van-field v-model="userInfo.email" label="邮箱" placeholder="输入邮箱"  :rules="emailRule" />
				<van-field v-model="userInfo.tel" label="手机号" placeholder="输入手机号" type="tel" :rules="telRule"/>
				<van-field v-model="userInfo.password" label="密码" placeholder="输入密码" type="password"/>
			</van-cell-group>
			<van-button type="default" class="signinBtn">同意并注册</van-button>
		</van-form>
		
	</div>
</template>

<script>
	//引入子组件
	import loginHeader from '@/components/common/loginHeader.vue'
	
	export default {
		name:"register",
		data() {
			return {
				userInfo:{name:"",email:"",tel:"",password:"",username:"1021667792"},
				emailRule:[
					{required:true,message:"输入邮箱",trigger:"onBlur"},
					{pattern:/^\w{6,14}@\w{2,6}.com$/,message:"邮箱不符合要求",trigger:"onBlur"}
				],
				telRule:[
					{required:true,message:"输入手机号",trigger:"onBlur"},
					{pattern:/^1[3|4|8]\d{9}$/,message:"手机号不符合要求",trigger:"onBlur"}
				]
			}
		},
		methods:{
			onFailed(err) {
				console.log("失败",err);
				this.userInfo.name ="";
				this.userInfo.email ="";
				this.userInfo.tel ="";
				this.userInfo.password ="";
			},
			async registerSumbit() {
				const {data:res} =await this.$http.post('/register',{
					name:this.userInfo.name,username:this.userInfo.username,
					password:this.userInfo.password
				})
				if (res.code ==302) {
					this.$message.fail('信息已存在');
					return;
				} else if(res.code !==200) {
					return this.$message.fail("注册失败")
				}
				this.$message.success("注册成功")
				console.log(res.code);   //200
				this.$router.push('login')
			}
		},
		components:{
			loginHeader
		}
	}
</script>

<style scoped>
	.back {
		background-color: #e5e5e5;height:100%;width:100%;
	}

	.signinBtn {
		margin-top: 30px;
		height:45px;
		background-color: #ffadb4;
		width:100%;
		color: white;
		border-radius: 15px;
	}
</style>
