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
    label: "日本語",
  },
  {
    code: "cn",
    label: "汉语",
  },
]);

const currencyCurrent = ref();
const currencyList = ref([
  {
    code: "THB",
    label: "THB",
  },
  {
    code: "USD",
    label: "USD",
  },
  {
    code: "JPY",
    label:"JPY",
  },
  {
    code:"CNY",
    label:"CNY",
  }
]);
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
    <div class="menu">
      <MenubarComponent :model="items">
        <template #start>
          <router-link to="/">
          <img
            alt="logo"
            src="../src/assets/image/Klothes_logo1.png"
            height="40"
            class="mr-2"
          /></router-link>
          
        </template>
        <template #end>
          <div class="flex">
              <span>
                <img
                  src="./assets/image/money.png"
                  alt=""
                  style="height: 40px;"
                />
              </span>
              <span class="pl-2">
                <DropdownComponent
                  :options="currencyList"
                  v-model="currencyCurrent"
                  optionLabel="label"
                  placeholder="Currency"
                  style="height: 40px; width: 140px; background: none; border: none;"
                  @change="currencyLocale"
                />
              </span>
              <span class="pl-5">
                <img
                  src="./assets/image/language.png"
                  alt=""
                  style="height: 40px"
                />
              </span>
              <span class="pl-2">
                <DropdownComponent
                  :options="localeList"
                  v-model="localeCurrent"
                  optionLabel="label"
                  placeholder="Language"
                  style="height: 40px; width: 140px; background: none; border: none;"
                  @change="updateLocale"
                />
              </span>
          </div>
        </template>
      </MenubarComponent>
    </div>
  </div>

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

/* .styledropdown {
  background-color: #7f669d !important;
  color: white !important;
  font-style: italic !important; 
} */
.font-white{
  color: white;
  justify-content: center;
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
