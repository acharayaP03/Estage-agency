<template>
      <!-- ======= Intro Section ======= -->
  <div class="intro intro-carousel swiper position-relative">
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
          },
          next: {
              translate: ['100%', 0, 0],
          },
        }"
    >
        <SwiperSlide
            class="swiper-wrapper"
            v-for="(slide, slideIndex) in sliderOptions"
            :key="slideIndex" 
        >
          <InfoSliderSection :slide="slide"/>
        </SwiperSlide>
    </Swiper>
    <div class="swiper-pagination"></div>
  </div><!-- End Intro Section -->
</template>
<script setup lang="ts">

import InfoSliderSection from '~~/components/InfoSliderSection.vue';
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

    const sliderOptions: Slide[] = [
        {
            id: 'first-slide-1',
            image: '/img/slide-1.jpg',
            suburb: 'Strath Field',
            state: 'NSW',
            street: 'Venda Road Five',
            streetNo: '205/Rino',
            postcode: 2035,
            rent: 1200
        },
                {
            id: 'first-slide-2',
            image: '/img/slide-3.jpg',
            suburb: 'North Strath Field',
            state: 'NSW',
            street: 'Crecent Drive Five',
            streetNo: '106/4',
            postcode: 2045,
            rent: 1000
        },
                {
            id: 'first-slide-3',
            image: '/img/slide-2.jpg',
            suburb: 'Lidcombe',
            state: 'NSW',
            street: 'Bombay Street',
            streetNo: '200/204',
            postcode: 2141,
            rent: 1400
        }
    ]
</script>