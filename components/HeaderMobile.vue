<template>
    <div>
		<button v-on:click="triggerMenu" id="trigger-mobile-menu" type="button" role="button" aria-label="Toggle Navigation" class="btn-style-none off"> {{btnText}} </button>
    	<div id="mobile-menu">
    		<div class="menu-wrapper">
    			<nav id="mobile-stacker-nav-menu" class="main-nav stacker-nav">
    				<ul class="list-style-none nav-menu">
    					<li><a href="dashboard.html" class="menu-item">Dashboard</a></li>
		                <li><a href="investment-growth.html" class="menu-item">My deposit growth</a></li>
		                <li><a href="property-timeline.html" class="menu-item">My property timeline</a></li>
		                <li><a href="documents.html" class="menu-item">My documents</a></li>
		                <li><a href="network.html" class="menu-item">Property prosper network</a></li>
					</ul>
					<ul class="list-style-none secondary-nav nav-menu">
		            	<li><a href="index.html" class="active">My portfolio</a></li>
		            	<li><a href="project.html">The Fifth Manor | Apt no. 00</a></li>
		            	<li><a href="contact.html">Contact</a></li>
		            	<li><a href="details.html" class="">Your details</a></li>
		            	<li><a href="#">Logout</a></li>
		            </ul>
		            <div class="language-mobile">
		            	<a href="#">En</a>
						<a href="#">简体</a>
						<a href="#">繁體</a>
		            </div>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return { 
			btnText:  'Menu'
		}
	},
	methods: {
		triggerMenu: function() {
			if(this.btnText == 'Menu') {
				this.btnText = 'Close'
				this.$emit('openMenu', true);
			}else{
				this.btnText = 'Menu'
				this.$emit('openMenu', false);
			}
			
		}
	}
    
}
</script>


