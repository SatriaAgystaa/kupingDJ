<template>
  <section class="w-full bg-white">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <!-- Title Section -->
        <div class="lg:w-1/4">
          <h2 class="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-glancyr-regular text-black">
            FAQ
          </h2>
        </div>
        
        <!-- Content Section -->
        <div class="lg:w-3/4">
          <h3 class="text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-glancyr-medium text-black mb-8 sm:mb-10 md:mb-12 flex flex-col">
            <span>FREQUENTLY ASKED</span>
            <span>QUESTIONS ABOUT KUPING DJ</span>
          </h3>
          
          <div class="w-full space-y-6 sm:space-y-8">
            <QuestionCard
              v-for="(item, index) in faqItems"
              :key="item.id"
              :question="item.question"
              :answer="item.answer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { faqData } from '~/data/faq'
import QuestionCard from '~/components/AboutPage/FAQ/QuestionCard/QuestionCard'

const faqItems = faqData
</script>

<style>
/* Custom text sizes for perfect scaling */
.text-2\.5xl {
  font-size: 1.75rem;
  line-height: 2.25rem;
}
.text-3\.5xl {
  font-size: 2rem;
  line-height: 2.5rem;
}
.text-4\.5xl {
  font-size: 2.5rem;
  line-height: 1;
}
</style>