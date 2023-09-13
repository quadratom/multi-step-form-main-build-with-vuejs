<template>
  <div>
    <label class="flex items-center space-x-2">
      <span v-if="isChecked" class="text-green-500">ON</span>
      <span v-else class="text-red-500">OFF</span>
      <input
        type="checkbox"
        class="form-checkbox h-5 w-5 text-green-500"
        v-model="isChecked"
      />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>
