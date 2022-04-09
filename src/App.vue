<template>
    <div class="dashboard">
        <revenue-list />
        <expenditure-list />
    </div>
</template>

<script>
import RevenueList from './components/RevenueList.vue';
import ExpenditureList from './components/ExpenditureList.vue';

export default {
  name: 'App',
  components: {
    RevenueList,
    ExpenditureList,
  },
};
</script>

<style lang="scss" src='./App.scss' />
