<template>
  	<div class="grid-wrapper">
		<div class="grid-box card">
			<h3>{{head}}</h3>
			<p class=" main-text">{{mainText}}</p>
		  	<div class="chart-box graph-box">
				<div class="chart-image">
					<div class="img-wrapper">
						<img src="~assets/img/donut-chart.png"  alt="chart"/>
					</div>
				</div>
				<div class="chart-text">
						<h3 class="chart-title">{{title}}</h3>
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
      head : 'Here is where you are today',
      mainText : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      imageLink : '/assets/img/donut-chart.png',
      title : 'A$75,468',
      textLink : 'View deposit growth'
    }
  }
}
</script>

<style>


</style>