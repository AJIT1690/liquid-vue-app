<template>
	<div class="grid-wrapper">
		<div class="grid-box card">
			<h3>{{head}}</h3>
      <div class="chart-box graph-box">
			  <div class="img-wrapper">
					<!--<img src="{{imageLink}}" /> -->
			  </div>
      </div>
		</div>
  </div>
</template>

<script>
export default {
  data : function() {
    return {
    head : 'Your investment overview',
    imageLink : '/assets/img/overview-chart.png'
    }
  }
}
</script>

<style>

</style>