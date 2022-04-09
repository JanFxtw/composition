<template>
    <ul class="list">
        <input
            v-model="input"
            :placeholder="listTitle"
            @change="updateValue"
        />
        <li
            v-for="item in modelValue"
            :key="item"
            class="list-item"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'ListTemplate',
};
</script>

<style lang="scss" src='./ListTemplate.scss' />
