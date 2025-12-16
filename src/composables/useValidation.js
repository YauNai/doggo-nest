import { computed } from "vue";

export function useValidation(el, validator) {
  const isValid = computed(() => {
    if (el.value.length === 0) {
      return null;
    }
    return validator.test(el.value);
  });

  const showError = computed(() => {
    return isValid.value === false && el.value.length > 0;
  });

  return { isValid, showError };
}
