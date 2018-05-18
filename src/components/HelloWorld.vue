<template>
  <div id="helloworld">
    <h1>Hello World!</h1>
    <h4>
      <input name="test" type="date" class="datepicker btn" v-model="fromDate">
      ~ <input name="test" type="date" class="datepicker btn" v-model="endDate" >
      <!-- <button type="button" class="btn" @click="filter">查詢</button> -->
      <v-btn color="info" @click="filter">查詢</v-btn>
    </h4>
    <v-app id="inspire">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs6 md3 lg3>
          <v-card height="50%">
            <v-card-title><h3>客单价</h3></v-card-title>
            <v-card-media>
              <span class="specword">¥ 34.89</span>
            </v-card-media>
          </v-card>
            <v-card height="50%">
            <v-card-title><h3>客单数</h3></v-card-title>
            <v-card-media>
             <span class="specword">8</span>
            </v-card-media>
          </v-card>
        </v-flex>
        <v-flex xs6 md3 lg3>
          <v-card height="50%">
            <v-card-title><h3>消费额</h3></v-card-title>
            <v-card-media>
              <span class="specword">¥ 279</span>
            </v-card-media>
          </v-card>
          <v-card height="50%">
            <v-card-title><h3>消费占比</h3></v-card-title>
            <v-card-media>
              <span class="specword">10.37 %</span>
            </v-card-media>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 lg6>
          <v-card>
            <v-card-media>
             <figure>
               <chart
                 flex
                 :options='mixBarLine'
                 ref='bar'
                 auto-resize
               />
             </figure>
           </v-card-media>
           </v-card>
       </v-flex>
       <v-flex xs12 md6 lg6>
         <v-card>
           <v-card-media>
            <figure>
              <chart
                flex
                :options='sell_money'
                ref='line'
                auto-resize
              />
            </figure>
          </v-card-media>
          </v-card>
      </v-flex>
      <v-flex xs12 md6 lg6>
        <v-card>
          <v-card-media>
           <figure>
             <chart
               flex
               :options='weather'
               ref='line'
               auto-resize
             />
           </figure>
         </v-card-media>
         </v-card>
     </v-flex>
      </v-layout>
    </v-container>
  </v-app>
  </div>
</template>

<script>
import getLine from "../assets/data/sell_money_line";
import getWeekno from "../assets/data/weekno";
import getWeather from "../assets/data/getweather";
export default {
  data() {
    return {
      sell_money: getLine(),
      mixBarLine: getWeekno(),
      weather: getWeather(),
      fromDate: this.formatdate(new Date()),
      endDate: this.formatdate(new Date((new Date().getTime())+60*60*1000*24))
    }
  },
  methods: {
    filter() {
      console.log(this.fromDate, this.endDate)
    },
    formatdate(datepicker) {
      return datepicker.getFullYear()+"-"+this.addzero(datepicker.getMonth()+1)+"-"+this.addzero(datepicker.getDate())
    },
    addzero(n) {
      if(n<10) {
        return "0"+n;
      } else return n;
    }
  },
}
</script>
<style  lang="scss">
@import '@/assets/css/index.scss';
</style>
