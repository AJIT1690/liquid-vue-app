<template>
  <div>
    
    <div class="row">
      <div class="col-md-12 col-lg-10">
        <intro-content :pageTitle="pageTitle" :leadText="leadText"></intro-content>
        <project-card :name="name2" :project="project2" :projectAddress="projectAddress2" :linkText="linkText" id="project-2"></project-card>
        <div class="row">
            <div class="col-lg-6">
               <PortfolioCard></PortfolioCard>
            </div>
            <div class="col-lg-6">
                <DonutCard></DonutCard>
                
            </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>

import ProjectCard from '~/components/index/ProjectCard.vue'
import IntroContent from '~/components/index/IntroContent.vue'
import DonutCard from '~/components/investmentGrowth/DonutCard.vue'
import PortfolioCard from '~/components/investmentGrowth/PortfolioCard.vue'
import {TestMixin} from '~/components/TestMixin.js'

export default {
  components: {
    ProjectCard,
    IntroContent,
    DonutCard,
    PortfolioCard
  },

  data: function(){
    return {
      pageTitle: 'Hi Susan,',
      leadText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
      linkText: 'View my investement',
      name2: 'The Fifth Manor',
      project2: 'Apt No. 00',
      projectAddress2: 'McGrath Avenue, St Kilda'
    }
  },
  mixins: [TestMixin]
}

</script>

<style scoped>
  #project-1 {
    background-image: url('~assets/img/portfolio-card-1.jpg');
  }
  #project-2 {
    background-image: url('~assets/img/portfolio-card-2.jpg');
  }
</style>
