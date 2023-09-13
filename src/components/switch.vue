<template>
  <div>
    <label class="flex items-center space-x-2 cursor-pointer">
      <!-- <span v-if="isChecked" class="text-green-500">ON</span>
      <span v-else class="text-red-500">OFF</span> -->
      <div
        @click="toggle"
        :class="{ 'bg-green-500': isChecked, 'bg-red-500': !isChecked }"
        class="w-12 h-6 rounded-full p-1 duration-300 ease-in-out"
      >
        <div
          :class="{ 'translate-x-6': isChecked }"
          class="w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out"
        ></div>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: { type: Boolean, required: true }, // Prop to accept the initial value
  },
  data() {
    return {
      isChecked: this.value,
    };
  },
  methods: {
    toggle() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>
