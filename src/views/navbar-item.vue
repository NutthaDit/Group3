<template>
  <div style="width: 100% !important" class="menu">
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
            <h1>{{t('klothes')}}</h1>
            <router-link to="/" style="text-decoration: none">
              <h3>HOME</h3>
            </router-link>
            <router-link to="/shop" style="text-decoration: none">
              <h3>SHOP</h3>
            </router-link>
          </SidebarComponent>

          <router-link to="/" style="text-decoration: none">
            <div class="mr-5" style="margin-top: 7px">
              <img alt="logo" src="../assets/image/Klothes.png" height="40" />
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
    </MenubarComponent>
  </div>
</template>

<script setup>
import { ref,onMounted } from "vue";
import { useI18n } from "vue-i18n";
const visibleLeft = ref(false);
const items = ref([]);
const { t, locale } = useI18n();
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
]);

  const updateLocale = (event) => {
      locale.value = event.value.code;
      sessionStorage.setItem("locale", event.value.code);
    };
    const lc = sessionStorage.getItem("locale") || "en";

    localeCurrent.value = localeList.value.find((loc) => {
      return loc.code == lc;
    });
    locale.value = localeCurrent.value.code;



// onMounted(()=>{
//   const updateLocale = (event) => {
//       locale.value = event.value.code;
//       sessionStorage.setItem("locale", event.value.code);
//     };
//     const lc = sessionStorage.getItem("locale") || "en";

//     localeCurrent.value = localeList.value.find((loc) => {
//       return loc.code == lc;
//     });
//     locale.value = localeCurrent.value.code;
// })
// const items = ref([
//     {
//     label:'File',
//     icon:'pi pi-fw pi-file',
//     items:[
//             {
//                 label:'New',
//                 icon:'pi pi-fw pi-plus',
//                 items:[
//                     {
//                         label:'Bookmark',
//                         icon:'pi pi-fw pi-bookmark'
//                     },
//                     {
//                         label:'Video',
//                         icon:'pi pi-fw pi-video'
//                     }
//                 ]
//             },
//             {
//                 label:'Delete',
//                 icon:'pi pi-fw pi-trash'
//             },
//             {
//                 separator:true
//             },
//             {
//                 label:'Export',
//                 icon:'pi pi-fw pi-external-link'
//             }
//         ]
//     },
//     {
//         label:'Edit',
//         icon:'pi pi-fw pi-pencil',
//         items:[
//             {
//                 label:'Left',
//                 icon:'pi pi-fw pi-align-left'
//             },
//             {
//                 label:'Right',
//                 icon:'pi pi-fw pi-align-right'
//             },
//             {
//                 label:'Center',
//                 icon:'pi pi-fw pi-align-center'
//             },
//             {
//                 label:'Justify',
//                 icon:'pi pi-fw pi-align-justify'
//             },
//         ]
//     },
//     {
//         label:'Users',
//         icon:'pi pi-fw pi-user',
//         items:[
//             {
//                 label:'New',
//                 icon:'pi pi-fw pi-user-plus',
//             },
//             {
//                 label:'Delete',
//                 icon:'pi pi-fw pi-user-minus',
//             },
//             {
//                 label:'Search',
//                 icon:'pi pi-fw pi-users',
//                 items:[
//                     {
//                         label:'Filter',
//                         icon:'pi pi-fw pi-filter',
//                         items:[
//                             {
//                                 label:'Print',
//                                 icon:'pi pi-fw pi-print'
//                             }
//                         ]
//                     },
//                     {
//                         icon:'pi pi-fw pi-bars',
//                         label:'List'
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         label:'Events',
//         icon:'pi pi-fw pi-calendar',
//         items:[
//             {
//                 label:'Edit',
//                 icon:'pi pi-fw pi-pencil',
//                 items:[
//                     {
//                         label:'Save',
//                         icon:'pi pi-fw pi-calendar-plus'
//                     },
//                     {
//                         label:'Delete',
//                         icon:'pi pi-fw pi-calendar-minus'
//                     }
//                 ]
//             },
//             {
//                 label:'Archieve',
//                 icon:'pi pi-fw pi-calendar-times',
//                 items:[
//                     {
//                         label:'Remove',
//                         icon:'pi pi-fw pi-calendar-minus'
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         label:'Quit',
//         icon:'pi pi-fw pi-power-off'
//     }
// ]);
</script>
<style scoped>
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
</style>
