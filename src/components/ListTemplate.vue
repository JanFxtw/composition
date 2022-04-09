<template>
  <ul class="list">
        <li
            v-for="item in list"
            :key="item"
        >
            {{item.name}}
        </li>
        <input />
  </ul>
</template>

<script>
export default {
  name: 'ListTemplate',
};
</script>
