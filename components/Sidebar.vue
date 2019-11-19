<template>
    <!-- SIDE PANEL -->
	<div class="side-panel">
		<ul class="side-link-panel">
			<li id="mobile-sidepanel-header" v-on:click="openSidebar">
				<a href="#">
					<div class="icon-wrapper">
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#phone"></use></svg>
					</div>
					<div class="label-wrapper">
						<p>My investment journey</p>
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#arrow_accordion"></use></svg>
					</div>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="icon-wrapper">
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#select-a-property"></use></svg>
					</div>
					<p>Select a property</p>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="icon-wrapper">
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#reserve-property"></use></svg>
					</div>
					<p>Reserve property</p>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="icon-wrapper">
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#sign-contract-pay-deposit"></use></svg>
					</div>
					<p>Sign contract & pay deposit</p>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="icon-wrapper">
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#arrange-finance"></use></svg>
					</div>
					<p>Arrange finance</p>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="icon-wrapper">
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#appoint-a-lawyer"></use></svg>
					</div>
					<p>Appoint a lawyer</p>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="icon-wrapper">
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#arrange-pre-settlement-inspection"></use></svg>
					</div>
					<p>Arrange pre-settlement inspection</p>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="icon-wrapper">
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#settlement-handover"></use></svg>
					</div>
					<p>Settlement & handover</p>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="icon-wrapper">
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#appoint-property-management"></use></svg>
					</div>
					<p>Appoint property management</p>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="icon-wrapper">
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#building-community-management"></use></svg>
					</div>
					<p>Building & community management</p>
				</a>
			</li>
			<li>
				<a href="#">
					<div class="icon-wrapper">
						<svg class="icon"><use xlink:href="~/assets/svg/icon.svg#tax-specialist"></use></svg>
					</div>
					<p>Appoint a tax speacialist</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data: function() {
		return{
			sideBarOpen: false
		}
	},
	methods: {
		openSidebar: function() {
			this.sideBarOpen = !this.sideBarOpen;
			this.$emit('openSidebar', this.sideBarOpen);
		}
	}
}
 
</script>