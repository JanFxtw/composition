<script>
import { ref } from 'vue';
import ListTemplate from './ListTemplate.vue';

export default {
  name: 'RevenueList',
  extends: ListTemplate,
  setup() {
    const list = ref([]);
    const input = ref(null);

    function updateValue(evt) {
      input.value = null;
      list.value.push(evt.target.value);
    }

    return {
      list,
      input,
      updateValue,
    };
  },
};
</script>
