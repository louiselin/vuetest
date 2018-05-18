<template>
  <div id="login">
    <!-- <h1>Login Page</h1> -->
    <!-- <img src="../assets/logo.png"> -->
    <div class="container">
            <div class="row row-centered">
                <div class="well col-md-6 col-centered">
                    <h2>歡迎登入🛒🛒🛒</h2>
                    <form @submit.prevent="login">
                        <div class="input-group input-group-md">
                            <span class="input-group-addon" id="sizing-addon1"><i class="glyphicon glyphicon-user" aria-hidden="true"></i></span>
                            <input type="text" v-model="userName" class="form-control" id="userid" name="userid" placeholder="請輸入帳號" required/>
                        </div>
                        <br>
                        <div class="input-group input-group-md">
                            <span class="input-group-addon" id="sizing-addon1"><i class="glyphicon glyphicon-lock"></i></span>
                            <input type="password" v-model="password" class="form-control" id="password" name="password" placeholder="請輸入密碼" required/>
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-primary btn-block">登入</button>
                    </form>
                </div>
                <div class="well col-md-6 col-centered">
                    <ol>
                      <li>Login and Logout, localStorage token<v-icon>done</v-icon></li>
                      <li>vue-router history mode<v-icon>done</v-icon></li>
                      <li>Responsive Echarts.js<v-icon>done</v-icon></li>
                      <li>wordcloud w/ maskImage<v-icon>done</v-icon></li>
                      <li>axios or json<v-icon>done</v-icon></li>
                      <li>Dockerfile container<v-icon>done</v-icon></li>
                      <li>Vuex store<v-icon>clear</v-icon></li>
                      <li>date intervals query<v-icon>clear</v-icon></li>
                    </ol>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
  export default {
    data () {
      return {
        userName: '',
        password: '',
      }
    },
    methods: {
      login(){
        //write login authencation logic here!
        if( this.userName == 'abcd' && this.password == '1234' ){
          localStorage.setItem('token', 'ImLogin')
          Toast('登入成功！');
          this.$router.push('/');
        } else{
          Toast('檢查帳號或密碼！');
        }
      },

    }
  }
</script>
<style lang="scss">
@import '@/assets/css/app.scss';
</style>
