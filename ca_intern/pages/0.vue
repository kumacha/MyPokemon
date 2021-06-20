<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="member-card"
                width="500px"
                height="600px"
                :ripple="true"
              >
                <v-img
                  class="member-img"
                  :src="item.image"
                  width="500px"
                  height="400px"
                />
                <v-card-title class="member-title" v-text="item.title">
                </v-card-title>
                <v-card-subtitle>{{ item.price }}円</v-card-subtitle>
                <v-card-text v-text="item.category"></v-card-text>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#555555"></v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axios
      .get("https://ca-tech-challenge-web-202103.herokuapp.com/products/")
      .then(response => {
        // const pretitles = response.data.data.map(item => item.title);
        // const titles = pretitles.replace('CA TECH CHALLENGE STORE -');
        this.items = response.data.data[0];
        // console.log(response.data.data);
        // const change = response.data;
        // change.data[0].title = "赤のバッグ";
        // change.data[1].title = "オレンジのバッグ";
        // change.data[2].title = "ビンテージビジネスバッグ";
        // change.data[3].title = "リュックサック";
        // change.data[4].title = "赤いキャップ";
        // change.data[5].title = "ビンテージな赤いキャップ";
        // change.data[6].title = "白いキャップ";
        // change.data[7].title = "べっ甲のウェリントンメガネ";
        // change.data[8].title = "黒縁メガネ";
        // change.data[9].title = "黒縁ハーフリムメガネ";
        // change.data[10].title = "ピンクレンズのサングラス";
        // change.data[11].title = "黒のジャケット";
        // change.data[12].title = "ジーンズ三本セット";
        // change.data[13].title = "黒T-シャツ";
        // change.data[14].title = "白T-シャツ";
        // change.data[15].title = "ハイカットスニーカー";
        // change.data[16].title = "ダットスニーカー";
        // change.data[17].title = "白い有名なスニーカー";
        // change.data[18].title = "カラフルダットスニーカー";
        // change.data[19].title = "真っ白い有名なスニーカー";
        // change.data[0].to = "/redbag";
        console.log(response.data.data);
      });
  }
};
</script>
