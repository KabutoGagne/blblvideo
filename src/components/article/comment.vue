<template>
	<div>
		
			<div class="contentN" @touchstart="touchstart()"
			 @touchmove="touchmove()" ref="contRef" >
				
				<p style="margin-bottom:20px">用户评论xxxxxxxxxxxxxscscscscscscscsvffxaxaxazvsdsccs</p>
				<p style="margin:20px 0">用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsdzzxzxzadcd style="margin:20px 0"xdax x xa</p>
				<p style="margin:20px 0">用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsd</p>
				<p style="margin:20px 0">用户评论xxxxxxxxxxxxxscscscscscscscsvxsxsxsxffxvsd</p>
				<p style="margin:20px 0">用户评论xxxxxxxxxxxxxscscscscscscsdcdcdccsvffxvsd</p>
				<p style="margin:20px 0">用户评论xxxxxxxxxxxxxscscscscscdcdscscsvffxvsd</p>
				<p style="margin:20px 0">用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsd</p>
				<p style="margin:20px 0">用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsd</p>
				<p style="margin:20px 0">用户评论xxxxxxxxxxxxxscscscscscscsdcdcdccsvffxvsd</p>
				<p style="margin:20px 0">用户评论xxxxxxxxxxxxxscscscscscdcdscscsvffxvsd</p>
				<p style="margin:20px 0">用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsd</p>
				<p style="margin:20px 0">用户评论xxxxxxxxxxxxxscscscscscscscsvffxvsd</p>
			</div>
		
		
		<div :class="moveSelect" id="input">
			<input type="text" placeholder="发送内容" class="neirong">
			<button class="fasong">发送</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
				moveSelect:"moveDown",
				i:0
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll);
		},
		methods:{
			handleScroll(){
			            // 页面滚动距顶部距离
			            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			            let scroll = scrollTop -this.i;
			            this.i = scrollTop;
			            if(scroll<0){
			                // console.log('up')
											this.moveSelect ="moveDown"
			            }else{
			                // console.log('down')
											this.moveSelect ="moveUp";
			            }
									// console.log(this.i)
			        },
			// onload() {
			// 	console.log('可视区改变了');
			// },
			touchstart() {
			      // event.preventDefault() //阻止默认事件（长按的时候出现复制）
			 
			      this.startX = event.changedTouches[0].pageX
			      this.startY = event.changedTouches[0].pageY
			},
			touchmove() { // 如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
			      // event.preventDefault()    阻止默认事件，不能拖拽
			      let moveEndX = event.changedTouches[0].pageX
			      let moveEndY = event.changedTouches[0].pageY
			      let X = moveEndX - this.startX
			      let Y = moveEndY - this.startY
						// this.$refs.contRef.style.top =Y +'px';
			      if (Math.abs(X) > Math.abs(Y) && X > 0) {
			        // alert('left 2 right')
							console.log(X);
			      } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
			        // alert('right 2 left')
							console.log(X);
			      } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
			        // alert('top 2 bottom')
							this.moveSelect ="moveDown"
			      } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
			        // alert('bottom 2 top')
							this.moveSelect ="moveUp";
			      // } else {
			      //   alert('just touch')
			      }
			    },
					showMu() {
						if(this.moveSelect =="moveDown") {
							this.moveSelect ="moveUp";
							return;
						}
						this.moveSelect ="moveDown"
					}
		}
	}
</script>

<style scoped lang="scss">
	.contentN {
		width:100%;height:auto;position:relative;background-color: white;box-sizing: border-box;
	}
	#input {height:40px;position:fixed;width:90%;left:5%;transition:bottom 1s;background-color: white;
		box-shadow: 0px 0px 5px 5px #888888;
		.neirong {
			display:inline-block;border:none;border-radius: 4px;height:30px;width:80%;
			padding:4px 6px;box-sizing:border-box;background-color: #dfeae5;
			margin:5px 8px;
		}
		.fasong {
			display:inline-block;border:none;border-radius: 4px;height:30px;width:10%;color:white;background-color: #ffadb4;
			margin-right:4px;
		}
		}
	.moveDown {
		// top:810px;
		bottom:-50px;
	}
	.moveUp {
		// top:750px;
		bottom:10px;
	}
</style>
