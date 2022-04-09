import { ref } from 'vue';

const isNumeric = new RegExp(/^\d+$/);

export default function (props, emit) {
  const input = ref(null);

  const updateValue = (evt) => {
    const { value } = evt.target;
    input.value = null;

    if (!isNumeric.test(value)) { return; }

    const list = [...props.modelValue];
    list.push(evt.target.value);
    emit('update:modelValue', list);
  };

  return {
    input,
    updateValue,
  };
}
