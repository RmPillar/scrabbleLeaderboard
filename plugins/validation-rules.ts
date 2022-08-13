import { defineRule } from "vee-validate";

export default defineNuxtPlugin(() => {
  defineRule("required", (value) => {
    if (!value || !value.length) {
      return "This field is required";
    }
    return true;
  });
  defineRule("email", (value) => {
    // Field is empty, should pass
    if (!value || !value.length) {
      return true;
    }
    console.log(value);
    // Check if email
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        value
      )
    ) {
      console.log(value);
      return "Please enter a valid email!";
    }
    return true;
  });

  defineRule("min", (value, [limit]) => {
    if (!value || !value.length) {
      return true;
    }
    if (value < limit) {
      return `Please enter a value bigger than ${limit} `;
    }
    return true;
  });
});
