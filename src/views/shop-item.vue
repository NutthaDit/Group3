<template>
  <div style="padding-left: 5%">
    <h1>{{t('product list')}}</h1>
  </div>

  <div class="flex">
    <div class="col-4 pl-5">
      <CardComponent class="card" on-click="" on-pointerover="">
        <template #title
          ><div style="text-align: center">
            <p style="margin: 0px">{{t('t-shirt')}}</p><br>
            <img src="../assets/image/product1/Klothes1-1.png" alt="t-shirt" style="width: 70%" />
          </div>
        </template>
        <template #content>

          
          <div
            style="
              text-align: center;
              position: relative;
              top: 10px;
            "
          >
            <ButtonComponent icon="pi pi-shopping-cart" class="p-button-raised button" @click="goToDetail"/>
          </div>

          <div
            style="
              text-align: center;
              position: relative;
              top: 50px;
            "
          >
            <div class="price">{{t('price')}} : {{t('showPrice')}}</div>
          </div>
        </template>
      </CardComponent>
    </div>

    <div class="col-4 pl-5">
      <CardComponent class="card" on-click="" on-pointerover="">
        <template #title
          ><div style="text-align: center">
            <p style="margin: 0px">{{t('dresses')}}</p><br>
            <img src="../assets/image/product2/Klothes2-1.png" alt="dresses" style="width: 70%" />
          </div>
        </template>
        <template #content>
  
          
          <div
            style="
              text-align: center;
              position: relative;
              top: 10px;
            "
          >
            <ButtonComponent icon="pi pi-shopping-cart" class="p-button-raised button" @click="goToDetai2"/>
          </div>

          <div
            style="
              text-align: center;
              position: relative;
              top: 50px;
            "
          >
            <div class="price">{{t('price')}} : {{t('showPrice')}}</div>
          </div>
        </template>
      </CardComponent>
    </div>

    <div class="col-4 pl-5">
      <CardComponent class="card" on-click="" on-pointerover="">
        <template #title
          ><div style="text-align: center">
            <p style="margin: 0px">{{t('polo')}}</p><br>
            <img src="../assets/image/product3/Klothes3-1.png" alt="Polo shirt" style="width: 70%" />
          </div>
        </template>
        <template #content>
          
          <div
            style="
              text-align: center;
              position: relative;
              top: 10px;
            "
          >
            <ButtonComponent icon="pi pi-shopping-cart" class="p-button-raised button" @click="goToDetai3" />
          </div>

          <div
            style="
              text-align: center;
              position: relative;
              top: 50px;
            "
          >
            <div class="price">{{t('price')}} : {{t('showPrice')}}</div>
          </div>

          
        </template>
      </CardComponent>
    </div>

  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
//import { routerKey } from "vue-router";
import { useRouter } from "vue-router";
// import { RouterLink, RouterView } from 'vue-router'
// import productDetail from './views/productDetail.vue'
const { t } = useI18n();
const router = useRouter();

const goToDetail = () => {
  router.push("/detail1");
}
const goToDetai2 = () => {
  router.push("/detail2");
}
const goToDetai3 = () => {
  router.push("/detail3");
}
</script>

<style scoped>
/* @import "../assets/main.css"; */
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.card {
  height: 400px;
  width: 70%;
  max-height: 400px;
}
.button {
  color: #fbfacd;
  background-color: #7f669d;
}
.price {
  font-weight: bold;
  font-size: 20px;
}
.p-card-content {
  margin-top: 100px !important;
}
</style>
