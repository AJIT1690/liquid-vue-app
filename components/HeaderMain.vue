<template>
    <!-- Header -->
    <div>
	<header id="main-header" class="fixed">
		<div class="top-header">
			<div class="main-header-inner">
				<div class="links-left">
					<nuxt-link to="/">My portfolio</nuxt-link>
					<div class="project-links">
						<nuxt-link to="/Project">The Fifth Manor | Apt no. 00</nuxt-link>
					</div>
				</div>
				<div class="links-right">
					<nuxt-link to="/Contact">Contact</nuxt-link>
					<div class="language">
						<a href="#">En</a>
						<a href="#">简体</a>
						<a href="#">繁體</a> 
					</div>
					<div class="dorpdown-item">
						<a class="dropdown" href="">Welcome John <svg class="icon"><use xlink:href="/assets/svg/icon.svg#arrow_down"></use></svg></a>
						<div class="dropdown-list">
							<nuxt-link to="/Detail">Your details</nuxt-link>
							<nuxt-link to="/Detail">Logout</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	    <div class="main-header-inner">
	        <logo></logo>
	        <nav class="main-nav nav-menu">
				<main-nav></main-nav>
	        </nav>
	    </div>
	</header>
	<header-mobile></header-mobile>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import HeaderMobile from '~/components/HeaderMobile.vue'
import MainNav from '~/components/index/MainNav.vue'
export default {
	components: {
		HeaderMobile,
		Logo,
		MainNav
	}
}
</script>