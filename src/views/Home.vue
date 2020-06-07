<template>
  <div class="home">
   <nav-bar style="position:fixed;top:0px;z-index:99"></nav-bar>
	 <van-tabs v-model="active" swipeable sticky offset-top="45" style="margin-top: 45px;">
	   <van-tab :title="item.title" v-for="(item,index) in category" :key="index">
			<van-list v-model="item.loading" :finished="item.finished" @load="onload()" finished-text="没有更多了">
				<div style="display: flex;flex-wrap: wrap;align-content: stretch;">
						<detail :detailitem="categoryitem" v-for="(categoryitem,categoryIndex) in categoryList"
							:key="categoryIndex" 
							@tiaozhuan="$router.push('/article/' +categoryitem.id)"
							class="detailitem">
						</detail>
				</div>
			</van-list> 
			</van-tab>
	 </van-tabs>
	 <!-- 内容区域 -->
	 
  </div>
</template>

<script>
	import navBar from '@/components/common/navBar.vue';
	import detail from '../components/home/detail.vue';
export default {
  name: 'Home',
  components:{
		navBar,detail
	},
	data() {
		return {
			item:{
				loading:false,finished:false
			},
			category:[],
			active:0,
			categoryList:[],
			page:0,
		}
	},
	watch: {
		active() {
			this.page=0;
			this.getArticle()
			
		}
	},
	mounted() {
		// this.getCategory();
		// console.log(this.$route.path)
		this.getArticle();
	},
	methods:{
		//下列底部；开始增加页数，每次加一
		onload() {
			if(this.page >= 3) {
				return;
			} 
				this.page +=1;
			this.getArticle();
			this.item.finished =true;
		},
		async getArticle() {
			this.getCategory();
			const categoryItem =this.category[this.active];
			const {data:res} =await this.$http.get('/detail/' +categoryItem._id,{
				params:{ page:this.page,pagesize:10}
				//显示第一页    /detail/9   page:0,pagesize:10
			})
			this.item.loading =false;
			this.categoryList =res;
			// console.log(categoryItem._id);      //9
		},
		async getCategory() {
			const {data:res} =await this.$http.get('/category');
			this.category =res;
			// console.log(res);
			
		}
	}
}
</script>

<style scoped lang="scss">
	.home {
		width:100%;height:100%
	}
	.detailitem {
		width:46%;
	}
</style>
