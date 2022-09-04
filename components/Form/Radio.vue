<script setup lang="ts">
import { useField } from "vee-validate";

const {
  value = "",
  name,
  label,
  rules,
  color = "green",
} = defineProps<{
  value?: string;
  name: string;
  label: string;
  rules?: string;
  color?: "green" | "indigo";
}>();

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, rules, {
  initialValue: value,
});

const colorClass = computed(() =>
  color === "indigo"
    ? "text-indigo-400 focus:outline-indigo-400"
    : "text-green-400 focus:outline-green-400"
);
</script>

<template>
  <div
    class="form-radio relative flex items-center"
    :class="{ 'form-radio--hasError': !!errorMessage, success: meta.valid }"
  >
    <input
      :name="name"
      :id="name"
      type="radio"
      :value="inputValue"
      @input="handleChange"
      @blur="handleBlur"
      class="form-radio mr-10 h-20 w-20"
      :class="colorClass"
    />

    <label
      class="form-radio__label font-pally text-3xl text-gray-800 lg:text-3xl"
      :for="name"
      v-text="label"
    />

    <p
      class="form-radio__error absolute top-full left-0 mt-5 font-pally text-xl text-red-500"
      v-show="errorMessage || meta.valid"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
