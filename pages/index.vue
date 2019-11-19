<template>
  <div>
    
    <sidebar></sidebar>
    <div class="row">
      <div class="col-md-12 col-lg-10">
        <intro-content :pageTitle="pageTitle" :leadText="leadText"></intro-content>
        <project-card :name="name" :project="project" :projectAddress="projectAddress" :linkText="linkText" ></project-card>
        <project-card :name="name2" :project="project2" :projectAddress="projectAddress2" :linkText="linkText" ></project-card>
      </div>
    </div>
  </div>  
</template>

<script>

import ProjectCard from '~/components/index/ProjectCard.vue'
import IntroContent from '~/components/index/IntroContent.vue'
import Sidebar from '~/components/Sidebar.vue'
export default {
  components: {
    ProjectCard,
    IntroContent,
    Sidebar
  },

  data: function(){
    return {
      pageTitle: 'My Investment Portfolio',
      leadText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
      name: 'Hillcrest Heights',
      project: 'Apt No. 2408',
      projectAddress: 'Palmers Road, Port Melbourne',
      linkText: 'View my investement',
      name2: 'The Fifth Manor',
      project2: 'Apt No. 00',
      projectAddress2: 'McGrath Avenue, St Kilda'
    }
  }

    

}
</script>

<style>

</style>
