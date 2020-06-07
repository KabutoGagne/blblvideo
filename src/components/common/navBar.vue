<template>
	<div class="top">
		<van-popup v-model="selectVisiable" position="left" :style="{ width: '30%',height: '100%'}" class="conTop">
			<div style="width:100%;height:60px;text-align: center;line-height: 60px;background-color:  #ffadb4;color:white"
					@click="$router.push('/user')"
					>用户中心</div>
					<van-button style="height:66px;margin:2px 3px 0;"><van-icon name="eye-o" />我的关注</van-button>
					<van-button style="height:66px;margin:2px 3px 0;"><van-icon name="underway-o" />历史纪录</van-button>
					<van-button style="height:66px;margin:2px 3px 0;"><van-icon name="down" />离线缓存</van-button>
					<van-button style="height:66px;margin:2px 3px 0;"><van-icon name="star-o" />我的收藏</van-button>
					<van-button style="height:66px;margin:2px 3px 0;"><van-icon name="chat-o" />我的消息</van-button>
					<van-button style="height:66px;margin:2px 3px 0;"><van-icon name="balance-pay" />我的钱包</van-button>
					<van-button style="height:66px;margin:2px 3px 0;"><van-icon name="tv-o" />直播中心</van-button>
					<van-button style="height:66px;margin:2px 3px 0;"><van-icon name="envelop-o" />稿件管理</van-button>
			<van-button type="default" class="logoutBtn" @click="$router.push('/login')"
					>退出登录</van-button>
		</van-popup>
		
		<div class="left" @click="selectVisiable =true"><van-icon name="manager" />我的</div>
		<div>
			<p class="search">
				<van-icon name="search" style="position:absolute;top:5.5px;left:6px;"/>
				请输入内容
			</p>
		</div>
		<div>
			<!-- 放置头像或者默认头像 -->
			<div class="avatar" style="overflow: hidden;" @click="routerPath()">
				<!-- <img :src="imgPath" alt="用户头像" v-if="imgPath ==true">
				     <img src="" alt="默认头像" style="width: 100%;height: 100%;" v-else> 
				-->
			</div>
			<div class="downloadIcon">下载app</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['imgPath'],
		data() {
			return {
				selectVisiable:false
			}
		},
		methods:{
			routerPath() {
				if(this.$route.path !=='/user') {
					return this.$router.push('/user');
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.top {
		height:45px;width:100%;display:flex;background-color:white;
		div {flex:1;align-items: center;}
	}
	.conTop{z-index:99;}
	.left{
		width:50px;height:100%;background-color: #ffadb4;margin-right:10px;text-align: center;line-height: 50px;color:white
	}
	.avatar {float:left;margin:7.5px 8px;
		width:30px !important;height:30px;background-color:#d4d4d4 ;border-radius: 15px;
	}
	.downloadIcon {
		float:left;
		font-size:12px;color: white;background-color:  #ffadb4;width:55px;height:30px;line-height: 30px;
		border-radius: 5px;text-align: center;margin-top: 7.5px;
	}
	
	.logoutBtn {
		margin:10px 12px;
	}
	
	.search {
		position: relative;
		width:100%;height:25px;background-color: #e8e8e8;margin-top:10px;
		border-radius: 8px;font-size: 12px;line-height:25px;padding:0 20px;
		box-sizing: border-box;color:gray;
	}
</style>
