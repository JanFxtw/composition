<template>
  <ul class="list">
        <li
            v-for="item in list"
            :key="item"
            class="list-item"
        >
            {{item}}
        </li>
        <input v-model="input" @change="updateValue" />
  </ul>
</template>

<script>
export default {
  name: 'ListTemplate',
};
</script>

<style lang="scss" src='./ListTemplate.scss' />
