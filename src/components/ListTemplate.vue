<template>
    <ul class="list">
        <input
            v-model="input"
            :placeholder="listTitle"
            class="input"
            @change="updateValue"
        />
        <li
            v-for="item in modelValue"
            :key="item"
            class="list-item"
        >
            {{parseCurrency(item)}}
        </li>
    </ul>
</template>

<script>
import parseCurrency from '@/helpers/parseCurrency';

export default {
  name: 'ListTemplate',
  setup() {
    return {
      parseCurrency,
    };
  },
};
</script>

<style lang="scss" src='./ListTemplate.scss' />
