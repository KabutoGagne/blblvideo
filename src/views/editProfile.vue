<template>
	<div class="back">
		<login-header middleContent="修改资料" @back="backUserInfo"></login-header>
		
			<van-cell-group>
			  <van-cell title="头像" @click="upload">
					<template #right-icon>
					    <!-- <van-icon name="search" style="line-height: inherit;" /> -->
							<div style="width:24px;height:24px;border-radius: 12px;background-color: #0570DB;">
								<img :src="model.user_image" alt="头像" v-if="model.user_image">
							</div>
					  </template>
				</van-cell>
				<input type="file" ref="upAvatarRef" style="position: absolute;" @change="trigger($event)">
				</van-cell-group>
			
		
		<van-cell-group class="profileGroup">
		  <van-cell title="昵称" :value="model.user_name" @click="openDialog()"/>
			<van-cell title="账号" value="内容" />
			<van-cell title="性别" value="内容" />
			<van-cell title="个签" is-link :value="descContent"/>
		</van-cell-group>
		
		<van-cell-group>
			<van-cell title="空间隐私设置" value="" />
			<van-cell title="账号安全中心" value="" />
		</van-cell-group>
		<van-button type="default" style="margin-top: 10px;width:100%;" @click="$router.push('/login')">退出登录</van-button>
		
		<!-- <van-uploader :after-read="afterRead"></van-uploader> -->
		<!-- 昵称修改 -->
		<van-dialog v-model="editName" title="昵称" show-cancel-button @confirm="confirmName()">
		  <van-field v-model="input.user_name"></van-field>
		</van-dialog>
		<!-- 个性签名修改 -->
	</div>
</template>

<script>
	import loginHeader from '../components/common/loginHeader.vue'
	export default {
		components:{
			loginHeader,
		},
		data() {
			return {
				model:{
					user_name:"aaa",user_desc:""
				},
				input:{
					user_name:"",user_desc:""
				},
				editName:false
			}
		},
		computed:{
			descContent() {
				if(this.model.user_desc ==false) {
					return "这个人很神秘，什么都没有写".substr(0,8) +'...';
				}
				return this.model.user_desc.substr(0,8) +'...';
			}
		},
		created() {
			//因为报错500，先不获取数据
		},
		methods:{
			//还有一个渲染数据的函数get-/user/ +
			async getUserInfo() {
				const {data: res} =await this.$http.get('/user/'+localStorage.getItem("id"))
				this.model =res[0];
			},
			backUserInfo() {
				history.back();
			},
			upload() {
				this.$refs.upAvatarRef.click();
			},
			trigger(event) {
				const file =event.target.files;
				console.log(file);
				// const formData =new FormData();
				// formData.append('file',file);
				// const {data:res} =await this.$http.post('/upload',formdata),
				// this.model.user_image =res.url;
				//this.updateAvatar()
;			},
			//上传信息  ================每次修改完信息后调用
			async updateAvatar() {
				const {data:res} =await this.$http.post('/update/' +localStorage.getItem('id'),
				this.model);
				
			},
			afterRead(file) {
			      // 此时可以自行将文件上传至服务器
			      console.log(file);
			    },
			openDialog() {
				this.input.user_name =this.model.user_name;
				this.editName =true;
			},
			confirmName() {
				this.model.user_name =this.input.user_name;
				//进行put请求
			}
		}
	}
</script>

<style scoped lang="scss">
	.back {
		width:100%;height:100%;background-color: #e5e5e5;
		overflow:hidden !important;text-overflow: ellipsis !important;
		
		.profileGroup {
			margin-bottom: 20px;
		}
	}
	
</style>
