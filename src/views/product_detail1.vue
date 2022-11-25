<template>
    <div style="padding-left: 5%">
        <h1>{{t('t-shirt')}}</h1>
    </div>  
    <div class="flex">
        <div class="col-6">
            <div style="text-align: center">
                <!-- <img :src="img" alt="t-shirt" style="width: 70%" /> -->
                <!-- <img src="../assets/image/product1/Klothes1-1.png" alt="t-shirt" style="width: 70%" /> -->
                <img v-if="selectedColor" :src="require('@/assets/image/product1/' + selectedColor.src)" :alt="selectedColor.alt" style="width: 70%"/>
                <img v-else :src="require('@/assets/image/product1/Klothes1-1.png')" alt="t-shirt-white" style="width: 70%"/>
            </div>
            <div
                style="text-align: center; padding: 0px; margin-top: 20px"
                class="pt-0"
            >
                <p class="p-2" style="margin: 10px">{{t('description')}} : {{t('description1')}}</p>
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
            code: 'K1-White',
            src: "Klothes1-1.png",
            alt: "t-shirt-white"
        },
            {name: t('pink'), 
            code: 'K1-Pink',
            src: "Klothes1-2.png",
            alt: "t-shirt-pink"
        },
            {name: t('purple'), 
            code: 'K1-Purple',
            src: "Klothes1-3.png",
            alt: "t-shirt-purple"
        },
            {name: t('cream'), 
            code: 'K1-Cream',
            src: "Klothes1-4.png",
            alt: "t-shirt-cream"
        },
            {name: t('black'), 
            code: 'K1-Black',
            src: "Klothes1-5.png",
            alt: "t-shirt-black"
        },
            {name: t('green'), 
            code: 'K1-Green',
            src: "Klothes1-6.png",
            alt: "t-shirt-green"
        },
            {name: t('navy'), 
            code: 'K1-Navy',
            src: "Klothes1-7.png",
            alt: "t-shirt-navy"
        }
        ]);

const selectedSize = ref('XS');
const sizes = ref(['XS', 'S' ,'M' ,'L' ,'XL']);

const dataDetail1 = ref([
    {name: t('t-shirt'),
    color: selectedColor.name,
    size: selectedSize,
    price: 10
}
])

const pushDataDetail1 = () =>{
    console.log(dataDetail1.value)
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