<template>
  <div class="grid-wrapper">
		<div class="grid-box card">
			<div class="title-with-bth">
				<h3 class="title">{{title}}</h3>
				<p class="link-container mb0"><a class="text-link icon-link" href="#"><svg class="icon"><use xlink:href="/assets/svg/icon.svg#download"></use></svg>Download statement</a></p>
			</div>
			<div class="table table-responsive">
			<table>
        <tbody>
					<tr>
						<td><p class="description">{{description}}</p> </td>
						<td><p class="lead">{{lead}}</p></td>
          </tr>
					<tr>
						<td><p class="description">{{description}}</p> </td>
						<td><p class="lead">{{lead}}</p></td>
          </tr>
					<tr>
						<td><p class="description">{{description}}</p> </td>
						<td><p class="lead">{{lead}}</p></td>
          </tr>
          <tr>
						<td><h4 class="lead">{{leadText}} </h4> </td>
						<td><h4 class="red lead">A$60,000</h4></td>
          </tr>
				</tbody>
			</table>
			</div>
		</div>
	</div> 
</template>

<script>
export default {
  data : function(){
    return {
      title : 'Your investment summary',
      description : 'Purchase price for your Property Prosper property',
      lead : 'A$75,000',
      redLead : 'A$60,000',
      leadText : 'Balance owing at settlement'
    };
  }
}
</script>


<style>

</style>