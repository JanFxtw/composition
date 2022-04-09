<script>
import ListTemplate from './ListTemplate.vue';
import listHandling from '../composables/listHandling';

const listTitle = 'Einnahmen';

export default {
  name: 'RevenueList',
  extends: ListTemplate,
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    return {
      ...listHandling(props, emit, 'modelValue'),
      listTitle,
    };
  },
};
</script>
