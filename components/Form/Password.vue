<script setup lang="ts">
import { useField } from "vee-validate";

const {
  value = "",
  name,
  label,
  placeholder = "",
  rules,
} = defineProps<{
  value?: string;
  name: string;
  label: string;
  placeholder?: string;
  rules?: string;
}>();

const showPassword = ref(false);

const fieldType = ref("password");

const {
  value: inputValue,
  errorMessage,
  handleChange,
  meta,
} = useField(name, rules, {
  initialValue: value,
});

const toggleShowPassword = () => {
  fieldType.value = fieldType.value === "password" ? "text" : "password";
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div
    class="form-input"
    :class="{ 'form-input--hasError': !!errorMessage, success: meta.valid }"
  >
    <label
      class="form-input__label mb-5 font-pally text-3xl text-gray-800 lg:text-5xl"
      :for="name"
      >{{ label }}</label
    >
    <div class="group relative w-full">
      <input
        :name="name"
        :id="name"
        :type="fieldType"
        :value="inputValue"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleChange"
        class="form-input__input peer w-full border-b-2 border-gray-800 bg-gray-100 pt-20 pb-5 font-pally text-2xl transition-colors duration-500 focus:outline-none lg:text-4xl"
        :class="
          !!errorMessage
            ? 'focus:border-red-500 group-hover:border-red-500'
            : 'focus:border-green-400 group-hover:border-green-400'
        "
      />

      <button
        class="absolute right-0 top-6/12 w-40 -translate-y-6/12 text-gray-800 transition-colors duration-300"
        :class="
          !!errorMessage
            ? 'text-red-500'
            : 'group-hover:text-green-400 peer-focus:text-green-400'
        "
        type="button"
        @click="toggleShowPassword"
      >
        <IconEye v-if="showPassword" />
        <IconEyeOff v-if="!showPassword" />
      </button>
    </div>

    <p
      class="form-input__error mt-5 font-pally text-xl text-red-500"
      v-show="errorMessage || meta.valid"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
