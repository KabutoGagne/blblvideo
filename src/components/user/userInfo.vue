<template>
	<div class="profile">
		<div class="profile_pic"></div>
		<div class="userUp">
			<div class="upList">
				<ul>
					<li>0</li>
					<li>粉丝</li>
				</ul>

				<ul>
					<li>99</li>
					<li>关注</li>
				</ul>
				<ul>
					<li>99</li>
					<li>赞</li>
				</ul>
			</div>
			<van-button class="btn" type="default" @click="$emit('editProfile')">编辑资料</van-button>
		</div>
		
		<div class="userDetial">
			<h3>{{userInfo.name}}</h3>
			<p v-if="userInfo.user_desc">{{userInfo.user_desc}}</p>
			<p v-else>这个人很神秘，什么都没有写</p>
		</div>
		
	</div>
</template>

<script>
	export default {
		props:['userInfo']
	}
</script>

<style scoped lang="scss">
	.profile {
		background-color: white;
		width: 100%;height:300px;
		position:relative;
		.profile_pic {
			position:absolute;left:12px;top:-12px;background-color: orangered;
			width:70px;height:70px;border-radius: 35px;
		}
		.userUp {
			float:right;margin-right: 12px;width:200px;
			.upList {
				display:flex;margin:10px 0;
				ul {flex:1;list-style: none;text-align: center;font-size: 12px;}
				ul:nth-child(2) {border-left:1px gray solid;border-right:1px #969799 solid;}
			}
			.btn {
				border:1px solid  #ffadb4;color:#ffadb4;width:100%;height:32px;border-radius: 4px;
				box-sizing: border-box;
			}
		}
		.userDetial {
			clear:both;width:100%;padding:28px 12px 12px;box-sizing: border-box;border-bottom: 1px solid #d1d4d6;
			p {
				font-size: 14px;
			}
		}
	}
	
</style>
