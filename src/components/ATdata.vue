<template>
  <div id="atdata">
    <v-container fluid fill-height  class="blue-grey lighten-5 white--text">
       <v-layout row wrap>
         <v-flex xs12 md6 lg3>
           <v-card>
             <v-card-media>
               <figure>
                 <chart
                   flex
                   :options='bull'
                   ref='liquidFill'
                   auto-resize
                 />
               </figure>
             </v-card-media>
           </v-card>
         </v-flex>
         <v-flex xs12 md6 lg3>
           <v-card>
             <v-card-media>
               <figure>
                 <chart
                   flex
                   :options='wordcloud'
                   ref='wordCloud'
                   auto-resize
                 />
               </figure>
             </v-card-media>
           </v-card>
         </v-flex>
         <v-flex xs12 md6 lg3>
           <v-card>
             <!-- <v-card-title><h1>{{ line_title }}</h1></v-card-title> -->
             <v-card-media>
              <figure>
                <chart
                  flex
                  :options='piemember'
                  ref='pie'
                  auto-resize
                />
              </figure>
            </v-card-media>
            </v-card>
         </v-flex>
         <v-flex xs12 md6 lg3>
           <v-card>
             <!-- <v-card-title><h1>{{ line_title }}</h1></v-card-title> -->
             <v-card-media>
              <figure>
                <chart
                  flex
                  :options='pieclass'
                  ref='pie'
                  auto-resize
                />
              </figure>
            </v-card-media>
            </v-card>
         </v-flex>
         <v-flex xs12 md12 lg6>
           <v-card>
             <!-- <v-card-title><h1>{{ line_title }}</h1></v-card-title> -->
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
        <v-flex xs12 md12 lg6>
          <v-card>
            <!-- <v-card-title><h1>{{ line_title }}</h1></v-card-title> -->
            <v-card-media>
             <figure>
               <chart
                 flex
                 :options='barchart'
                 ref='bar'
                 auto-resize
               />
             </figure>
           </v-card-media>
           </v-card>
       </v-flex>
       <v-flex xs12 md12 lg6>
         <v-card>
           <!-- <v-card-title><h1>{{ bar_chart_title }}</h1></v-card-title> -->
           <v-card-media>
            <figure>
              <chart
                flex
                :options='timelineChart'
                ref='bar'
                auto-resize
              />
            </figure>
          </v-card-media>
          </v-card>
      </v-flex>
      <v-flex xs12 md12 lg6>
        <v-card>
          <!-- <v-card-title><h1>{{ bar_chart_title }}</h1></v-card-title> -->
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

       </v-layout>
     </v-container>
  </div>
</template>
<script>
import axios from 'axios';
import echarts from 'echarts'
import ECharts from "vue-echarts/components/ECharts";
import getBar from "../assets/data/bar";
import getLiquid from "../assets/data/liquid";
import getLine from "../assets/data/sell_money_line";
import getWordCloud from "../assets/data/wordcloud";
import getQuota_month from "../assets/data/quota_month";
import getWeekno from "../assets/data/weekno";
import getPiemember from "../assets/data/piemember";
import getPieclass from "../assets/data/pieclass";
import 'echarts-liquidfill/src/liquidFill.js'

export default {
  components: {
    chart: ECharts,
  },
  data() {
    return {
      img: '',
      bar_chart_title: '销量分析',
      line_title: '历史销售额资料',
      barchart: getBar(),
      bull: getLiquid(),
      sell_money: getLine(),
      wordcloud: getWordCloud(),
      timelineChart: getQuota_month(),
      mixBarLine: getWeekno(),
      piemember: getPiemember(),
      pieclass: getPieclass()
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/app.scss';
</style>
