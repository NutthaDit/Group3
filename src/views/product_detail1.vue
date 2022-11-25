<template>
    <div style="padding-left: 5%">
        <h1>{{t('t-shirt')}}</h1>
    </div>  
    <div class="flex">
        <div class="col-6">
            <div style="text-align: center">
                <img src="../assets/image/product1/Klothes1-1.png" alt="t-shirt" style="width: 70%" />
            </div>
            <div
                style="text-align: center; padding: 0px; margin-top: 20px"
                class="pt-0"
            >
                <p style="margin: 0px">{{t('description')}}</p>
            </div>
        </div>

        <div class="col-6">
            <div style="text-align: left">
                <h2>{{t('color')}}</h2>
                <Dropdown v-model="selectedColor" :options="colors" optionLabel="name" optionValue="code" :placeholder="t('selectAColor')" />
            </div>
            <div style="text-align: left">
                <h2>{{t('size')}}</h2>
                <SelectButton v-model="selectedSize" :options="sizes" aria-labelledby="single" />
            </div>
            <div style="text-align: left">
                <h2>{{t('price')}}</h2>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from "vue-i18n";
import Dropdown from 'primevue/dropdown';
import SelectButton from 'primevue/selectbutton';
const { t } = useI18n();

const selectedColor = ref();
const colors = ref([
            {name: t('white'), code: 'K1-White'},
            {name: t('pink'), code: 'K1-Pink'},
            {name: t('purple'), code: 'K1-Purple'},
            {name: t('cream'), code: 'K1-Cream'},
            {name: t('black'), code: 'K1-Black'},
            {name: t('green'), code: 'K1-Green'},
            {name: t('navy'), code: 'K1-Navy'}
        ]);

const selectedSize = ref('XS');
const sizes = ref(['XS', 'S' ,'M' ,'L' ,'XL']);

</script>


<style>
</style>