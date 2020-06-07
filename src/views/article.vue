<template>
	<div class="back">
		<!-- 获取用户头像数据；没有则默认头像 -->
		<!-- <nav-bar 	:imgPath=""></nav-bar> -->
		<nav-bar style="position:fixed;top:0;z-index:99;"></nav-bar>
		<div style="margin-top: 45px;">
			<div class="video" style="width:100%;">
				<video :src="model[0].content" style="width:100%;height:100%" controls="controls"></video>
			</div>
			<van-tabs swipeable v-model="active" sticky offset-top="45">
				<van-tab title="详情" >
					<p>标题{{model[0].name}}</p>
					<span>{{model[0].date}}</span>
					<cover></cover>
				</van-tab>
				<van-tab title="评论" >
					
						<comment></comment>
				</van-tab>
			</van-tabs>
			
		
	</div>
	</div>
</template>

<script>
	import navBar from '../components/common/navBar.vue'
	import cover from  '../components/article/cover.vue'
	import comment from '../components/article/comment.vue'
	export default {
		components:{
			navBar,cover,comment
		},
		data() {
			return {
				model:{},
				item:{loading:false,finished:false},
				suiji:9,
				active:0,
				//用于获取用户数据
				userInfo:{}
			}
		},
		mounted() {
			this.getData();
		},
		watch:{
			active() {
				console.log(this.active);
			}
		},
		methods:{
			
			//先要获取用户数据,根据localStorage，获取到用户id和头像
			//mounted
			async getData() {
				const {data:res} =await this.$http.get('/article/' +this.$route.params.id);
				this.model =res;
				// console.log(this.model[0],this.model[0].content)
			},
			//获取推荐视频信息
			async getCommend() {
				this.$http.get('/commend')
			}
		}
	}
</script>

<style scoped lang="scss">
	.back {
		width:100%;height:100%;
	}
</style>



<!-- [
    {
        "id": 9,
        "name": "Rap God  全  文  背  诵",
        "cont": null,
        "date": "04-16",
        "userid": 17,
        "img": "https://i1.hdslb.com/bfs/archive/033d18deb5b70711adef5ed6fcd46a606642e680.jpg@480w_270h_1c",
        "_id": 13,
        "commentlen": null,
        "content": "https://node.12380ch.com/upload/qwertyuiop.mp4",
        "category": {
            "_id": 13,
            "title": "音乐"
        },
        "userinfo": {
            "name": "专业团队",
            "id": 17,
            "gender": null,
            "user_desc": null,
            "user_img": null
        }
    }
] -->