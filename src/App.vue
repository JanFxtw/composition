<template>
    <div class="dashboard">
        <revenue-list v-model="revenueList" />
        <expenditure-list v-model="expenditureList" />
    </div>
</template>

<script>
import { ref } from 'vue';
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

    return {
      revenueList,
      expenditureList,
    };
  },
};
</script>

<style lang="scss" src='./App.scss' />
