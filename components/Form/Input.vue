<script setup lang="ts">
import { useField } from "vee-validate";
import { FormTypes } from "~~/types/form";

const {
  type = "text",
  value = "",
  name,
  label,
  placeholder = "",
  rules,
} = defineProps<{
  type?: FormTypes;
  value?: string;
  name: string;
  label: string;
  placeholder?: string;
  rules?: string;
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
</script>

<template>
  <div
    class="form-input relative"
    :class="{ 'form-input--hasError': !!errorMessage, success: meta.valid }"
  >
    <label
      class="form-input__label mb-5 font-pally text-3xl text-gray-800 lg:text-5xl"
      :for="name"
      >{{ label }}</label
    >
    <input
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      class="form-input__input w-full rounded-none border-b-2 border-gray-800 bg-gray-100 pt-20 pb-5 font-pally text-2xl text-gray-800 transition-colors duration-500 focus:outline-none lg:text-4xl"
      :class="
        !!errorMessage
          ? 'border-red-500'
          : 'hover:border-green-400 focus:border-green-400'
      "
    />

    <p
      class="form-input__error absolute top-full left-0 mt-5 font-pally text-xl text-red-500"
      v-show="errorMessage || meta.valid"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
