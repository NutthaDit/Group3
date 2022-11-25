<script setup>
import { RouterView } from "vue-router";
import { useI18n } from "vue-i18n";

// import Button from "primevue/button";

// const visibleLeft = ref(false);
// const items = ref([]);

// import Home from "../src/views/navbar-item.vue";
import { ref } from "vue";

const { locale } = useI18n();
const { t } = useI18n();

const localeCurrent = ref();
const localeList = ref([
  {
    code: "th",
    label: "ภาษาไทย",
  },
  {
    code: "en",
    label: "English",
  },
  {
    code: "jp",
    label:"日本語",
  },
  {
    code:"cn",
    label:"汉语",
  }
]);

// const currencyCurrent = ref();
// const currencyList = ref([
//   {
//     code: "THB",
//     label: "THB",
//   },
//   {
//     code: "USD",
//     label: "USD",
//   },
//   {
//     code: "JPY",
//     label:"JPY",
//   },
//   {
//     code:"CNY",
//     label:"CNY",
//   }
// ]);
//test
const updateLocale = (event) => {
  locale.value = event.value.code;
  console.log(event.value);
  console.log(event.value.code);
  sessionStorage.setItem("locale", event.value.code);
};
const lc = sessionStorage.getItem("locale") || "en";

localeCurrent.value = localeList.value.find((loc) => {
  return loc.code == lc;
});
locale.value = localeCurrent.value.code;

// const currencyLocale = (event) => {
//   locale.value = event.value.code;
//   console.log(event.value);
//   console.log(event.value.code);
//   sessionStorage.setItem("locale", event.value.code);
// };
// const cr = sessionStorage.getItem("locale") || "USD";

// currencyCurrent.value = currencyList.value.find((loc) => {
//   return loc.code == cr;
// });
// locale.value = currencyCurrent.value.code;

const items = ref([]);
</script>

<template>

    <div>
      <MenubarComponent :model="items">
        <template #start>
          <img
            alt="logo"
            src="../src/assets/image/Klothes_logo.png"
            height="40"
            class="mr-2"
          />
        </template>
        <template #end>
          <!-- <DropdownComponent
     :options="currencyList"
     v-model="currencyCurrent"
            optionLabel="label"
            placeholder="Currency"
            style="height: 40px"
            @change="currencyLocale"
      /> -->
          <DropdownComponent
     :options="localeList"
     v-model="localeCurrent"
            optionLabel="label"
            placeholder="Language"
            style="height: 40px"
            @change="updateLocale"
      />
        </template>
      </MenubarComponent>
    </div>
  <!-- header> -->
  <!-- <div style="width: 100% !important" class="menu">
    <MenubarComponent :model="items" style="height: 50px">
      <template #start>
        <div class="flex">
          <ButtonComponent
            icon="pi pi-align-left "
            class="mr-5 menu"
            style="border: none; font-size: 2rem; height: 40px; margin-top: 7px"
            @click="visibleLeft = true"
          />
          <SidebarComponent v-model:visible="visibleLeft" :baseZIndex="10000">
            <h1>klothes</h1>
            <router-link to="/" style="text-decoration: none">
              <h3>HOME</h3>
            </router-link>
            <router-link to="/shop" style="text-decoration: none">
              <h3>SHOP</h3>
            </router-link>
          </SidebarComponent>

          <router-link to="/" style="text-decoration: none">
            <div class="mr-5" style="margin-top: 7px">
              <img
                alt="logo"
                src="../src/assets/image/Klothes.png"
                height="40"
              />
            </div>
          </router-link>

          <router-link to="/" style="text-decoration: none">
            <div class="name">Klothes</div>
          </router-link>
        </div>
      </template>
      <template #end>
        <div>
          <i class="pi pi-globe mr-2" style="font-size: 2rem; color: white"></i>
          <DropdownComponent
            v-model="localeCurrent"
            :options="localeList"
            optionLabel="label"
            placeholder="Language"
            style="height: 40px"
            @change="updateLocale"
          />
        </div>
      </template>
    </MenubarComponent>  -->
  

  <!-- <Button label="Submit" icon="pi pi-check" iconPos="right" /> -->
  <!-- <MenubarComponent>
      <template #start>
        dd
      </template>
    </MenubarComponent> -->
  <!-- </div> -->
  <!--</header> -->

  <header>
    <!-- <Home></Home> -->
    <!-- <p>1234 {{t('klothes')}}</p> -->
  </header>

  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background-color: #7f669d;
  font: white;
}
.name {
  margin-top: 10px;
  color: white;
  font-size: 24px;
  font-style: italic;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
