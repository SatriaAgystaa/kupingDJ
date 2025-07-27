<template>
  <div class="relative">
    <BannerAbout/>
    <VisiMission />
    <Story />
    <DJCarousel/>
    <Profile />
    <ImpactSection />
    <FAQSection />
    <ContactForm />
  </div>
</template>

<script setup>
import BannerAbout from '~/components/AboutPage/BannerAbout/BannerAbout.vue'
import VisiMission from '~/components/AboutPage/VisiMission/VisiMission.vue'
import DJCarousel from '~/components/AboutPage/DJCarousel/DJCarousel.vue'
import Story from '~/components/AboutPage/Story/Story.vue';
import Profile from '~/components/AboutPage/Profile/ProfileSection.vue';
import ImpactSection from '~/components/AboutPage/ImpactStats/ImpactSection.vue';
import ContactForm from '~/components/AboutPage/ContactForm/ContactForm.vue';
import FAQSection from '~/components/AboutPage/FAQ/FAQSection/FAQSection.vue';

</script>
