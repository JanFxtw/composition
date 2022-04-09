<script>
import { ref } from 'vue';
import ListTemplate from './ListTemplate.vue';

export default {
  name: 'RevenueList',
  extends: ListTemplate,
  setup() {
    const list = ref([]);

    return {
      list,
    };
  },
};
</script>
