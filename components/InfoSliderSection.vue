<template>
      <div class="swiper-slide carousel-item-a intro-item bg-image" :style="{'background-image': `url(${slide.image})`}">
        <div class="overlay overlay-a"></div>
        <div class="intro-content display-table">
          <div class="table-cell">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="intro-body">
                    <p class="intro-title-top">Doral, Florida
                      <br> {{ slide.postcode}}
                    </p>
                    <h1 class="intro-title mb-4 ">
                      <span class="color-b">204 </span> Mount
                      <br> {{ slide.street}}
                    </h1>
                    <p class="intro-subtitle intro-price">
                      <a href="#"><span class="price-a">rent | $ {{ slide.rent}}</span></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
    import { PropType } from 'vue';
    export interface Slide {
        id: string;
        image: string;
        suburb: string;
        state: string;
        street: string;
        streetNo: string,
        postcode: number,
        rent: number
    }

    const props = defineProps({
        slide: {
            type: Object as PropType<Slide>,
            default: () => {}
        }
    })
</script>

<style scoped>

</style>