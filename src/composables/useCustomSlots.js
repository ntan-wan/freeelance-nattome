import { useSlots } from 'vue';

/*
 *  To check the slots passed by the parent component.
 */
export function useCustomSlots() {
  const slots = useSlots();

  function exists(name) {
    return !!slots[name];
  }

  return [exists];
}
