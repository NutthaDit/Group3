<template>
    <div style="padding-left: 5%">
        <h1>{{t('polo')}}</h1>
    </div>  
    <div class="flex">
        <div class="col-6">
            <div style="text-align: center">
                <img v-if="selectedColor" :src="require('@/assets/image/product3/' + selectedColor.src)" :alt="selectedColor.alt" style="width: 70%"/>
                <img v-else :src="require('@/assets/image/product3/Klothes3-1.png')" alt="polo-white" style="width: 70%"/>
            </div>
            <div
                style="text-align: center; padding: 0px; margin-top: 20px"
                class="pt-0"
            >
            <p class="p-2" style="margin: 10px">{{t('description')}} : {{t('description3')}}</p>
            </div>
        </div>

        <div class="col-6">
            <div style="text-align: left">
                <h2>{{t('color')}}</h2>
                <Dropdown v-model="selectedColor" :options="colors" optionLabel="name"  :placeholder="t('selectAColor')" />
                <!-- optionValue="name" -->
                <!-- <p>{{selectedColor}}</p> -->
            </div>
            <div style="text-align: left">
                <h2>{{t('size')}}</h2>
                <SelectButton v-model="selectedSize" :options="sizes" aria-labelledby="single" />
            </div>
            <div style="text-align: left">
                <h2>{{t('price')}}</h2>
            </div>
            <div style="text-align: left">
                <Button class="p-button-google p-3" aria-label="Purchase" @click="pushDataDetail1()">
                <i class="pi pi-shopping-cart px-2"></i>
                <span class="px-3">Purchase</span>
            </Button>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from "vue-i18n";
import Dropdown from 'primevue/dropdown';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
const { t } = useI18n();

const selectedColor = ref();
const colors = ref([
            {name: t('white'), 
            code: 'K3-White',
            src: "Klothes3-1.png",
            alt: "polo-white"
        }
        ]);

const selectedSize = ref('XS');
const sizes = ref(['XS', 'S' ,'M' ,'L' ,'XL']);

const dataDetail3 = ref([
    {name: t('polo'),
    color: selectedColor.name,
    size: selectedSize,
    price: 10
}
])

const pushDataDetail3 = () =>{
    console.log(dataDetail3.value)
}
</script>


<style>
.p-button-google {
    background: linear-gradient(to left, var(--purple-600) 50%, var(--purple-700) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease-out;
    color: #fff;
    border-color: var(--purple-700);
}
.p-button.google:hover {
    background-position: left bottom;
    background: linear-gradient(to right, var(--purple-600) 50%, var(--purple-700) 50%);
}
.p-button.google i {
    background-color: var(--purple-700);
}
.p-button.google:focus {
    box-shadow: 0 0 0 1px var(--purple-400);
}
</style>