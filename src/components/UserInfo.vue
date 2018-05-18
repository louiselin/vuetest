<template>
  <div class="userInfo">
  <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
    <div :key="item" v-for="item in list.aaa" >
        <p>{{item.content}}</p>
        <img :src="item.url" class="imgs">
    </div>
    </mt-loadmore>
    <div class="joke">
      <p></p>
      <div :key="item" v-for="item in list.aaaa" >
        <p>{{item.content}}</p>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    created (){
        this.$parent.$children[0]._data.text = "图片";
        this.$store.dispatch('getImgs');
        this.$parent.$children[0]._data.text = "笑话";
        this.$store.dispatch('getJoke');
    },
    computed:{
        list(){
            return {
                aaa: this.$store.state.imgs.imgs,
                aaaa: this.$store.state.joke.list
            }
        }
    },
    methods:{
        loadTop() {
            this.$store.dispatch('getImgs')
            this.$refs.loadmore.onTopLoaded();
        },
        handleTopChange(status) {
            this.topStatus = status;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

</style>
