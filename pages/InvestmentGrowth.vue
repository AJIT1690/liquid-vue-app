<template>
    <div class="row">
        <div class="col-lg-11">
            <div class="section-content">
                <h1 class="mb50">{{head}}</h1>
            </div>
            <div class="row-wrapper">
                <div class="row">
                    <div class="col-lg-5">
                        <DonutCard></DonutCard>
                    </div>
                    <div class="col-lg-6">
                        <OverviewCard></OverviewCard>
                    </div>
                </div>
            </div>
            <div class="row-wrapper">
                <div class="row">
                    <div class="col-lg-5">
                        <PortfolioCard></PortfolioCard>
                    </div>
                    <div class="col-lg-6">
                        <SummaryCard></SummaryCard>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>


<script>

import DonutCard from '~/components/investmentGrowth/DonutCard.vue';
import OverviewCard from '~/components/investmentGrowth/OverviewCard.vue';
import PortfolioCard from '~/components/investmentGrowth/PortfolioCard.vue';
import SummaryCard from '~/components/investmentGrowth/SummaryCard.vue'
export default {
    components : {
        DonutCard,
        OverviewCard,
        PortfolioCard,
        SummaryCard
    },
    data : function() {
        return {
            head : 'My Deposit Growth'
        }
    },
    created () {
        this.$nuxt.$loading.start()
    },
    mounted() {   
        setTimeout(() => this.$nuxt.$loading.finish(), 700)
    }
}
</script>