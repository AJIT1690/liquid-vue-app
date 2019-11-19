<template>
    <!-- Header -->
    <div>
	<header id="main-header" class="fixed">
		<div class="top-header">
			<div class="main-header-inner">
				<div class="links-left">
					<a href="index.html" class="active">My portfolio</a>
					<div class="project-links">
						<a href="project.html">The Fifth Manor | Apt no. 00</a>
					</div>
				</div>
				<div class="links-right">
					<a href="contact.html">Contact</a>
					<div class="language">
						<a href="#">En</a>
						<a href="#">简体</a>
						<a href="#">繁體</a> 
					</div>
					<div class="dorpdown-item">
						<a class="dropdown" href="">Welcome John <svg class="icon"><use xlink:href="/assets/svg/icon.svg#arrow_down"></use></svg></a>
						<div class="dropdown-list">
							<a href="details.html" class="">Your details</a>
		            		<a href="#">Logout</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	    <div class="main-header-inner">
	        <logo></logo>
	        <nav class="main-nav nav-menu">
	            <ul class="list-style-none">
					<li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
					
	                <li><a href="investment-growth.html" class="menu-item">My deposit growth</a></li>
	                <li><a href="property-timeline.html" class="menu-item">My property timeline</a></li>
	                <li><a href="documents.html" class="menu-item">My documents</a></li>
	                <li><a href="network.html" class="menu-item">Property prosper network</a></li>
	            </ul>

	        </nav>
	    </div>
	</header>
	<header-mobile></header-mobile>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import HeaderMobile from '~/components/HeaderMain.vue'
export default {
	components: {
		HeaderMobile,
		Logo
	}
}
</script>