<script setup lang="ts">
import { signIn } from "~~/utils/firebase";
import { Form } from "vee-validate";

const handleLogin = (data) => {
  signIn(data.email, data.password);
};
</script>

<template>
  <Form
    @submit="handleLogin"
    class="mx-auto flex h-full flex-col items-center justify-center space-y-50 lg:w-6/12"
  >
    <FormInput
      class="w-full"
      name="email"
      label="Email"
      type="email"
      rules="required|email"
    />

    <FormPassword
      class="w-full"
      name="password"
      label="Password"
      rules="required"
    />

    <BtnBlock label="Login" class="mr-auto w-6/12" />
  </Form>
</template>
