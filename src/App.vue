<template>
    <div
        class="balance"
        :class="{negative: currentBalance < 0}"
    >
        {{parseCurrency(currentBalance)}}
    </div>
    <div class="dashboard">
        <revenue-list v-model="revenueList" />
        <expenditure-list v-model="expenditureList" />
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import parseCurrency from '@/helpers/parseCurrency';
import RevenueList from './components/RevenueList.vue';
import ExpenditureList from './components/ExpenditureList.vue';

export default {
  name: 'App',
  components: {
    RevenueList,
    ExpenditureList,
  },
  setup() {
    const revenueList = ref([]);
    const expenditureList = ref([]);

    const currentBalance = computed({
      get: () => {
        const totalRevenue = revenueList.value.reduce(
          (prev, cur) => Number.parseInt(prev, 10) + Number.parseInt(cur, 10), 0,
        );

        const totalExpenditure = expenditureList.value.reduce(
          (prev, cur) => Number.parseInt(prev, 10) + Number.parseInt(cur, 10), 0,
        );

        return totalRevenue - totalExpenditure;
      },
    });

    return {
      revenueList,
      expenditureList,
      currentBalance,
      parseCurrency,
    };
  },
};
</script>

<style lang="scss" src='./App.scss' />
