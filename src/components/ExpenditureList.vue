<script>
import ListTemplate from './ListTemplate.vue';
import listHandling from '../composables/listHandling';

const listTitle = 'Ausgaben';

export default {
  name: 'ExpenditureList',
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
