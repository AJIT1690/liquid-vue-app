<template>
  <div class="grid-wrapper">
	  <div class="grid-box card">
		  <h3>{{head}}</h3>
		  <p class=" main-text">{{mainText}}</p>
		  <div class="chart-box">
			  <div class="chart-image">
				  <div class="img-wrapper">
					  <img src="~assets/svg/portfolio-media.svg" alt="logo">
				  </div>
			  </div>
			  <div class="chart-text">
				  <p class="chart-title lead">{{chartTitle}}</p>
				  <p class="text-link-container mb0"><a class="text-link" href="#">{{textLink}}</a></p>
			  </div>
		  </div>
	  </div>
  </div>
</template>

<script>
export default {
  data : function() {
    return {
      head : 'Arrange your finance in time for settlement',
      mainText : 'The earlier you start the better. We will touch base with you prior to settlement to check how you are going and to refer you to an expert if you need help.',
      chartTitle : 'Ready to explore some options? We have a team of experts to assist you!',
      textLink : 'Speak to an expert',

    }
  }
}
</script>

<style>

</style>