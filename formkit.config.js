import { generateClasses } from "@formkit/themes";

const inputClasses = {
  outer: "w-full",
  label: "font-pally text-3xl lg:text-5xl text-gray-800 mb-5",
  input:
    "w-full font-pally text-2xl lg:text-4xl bg-gray-100 border-b-2 border-gray-800 focus:border-green-400 hover:border-green-400 transition-colors duration-500 focus:outline-none pt-20 pb-5 ",
  suffix: "w-50",
};

export default {
  config: {
    classes: generateClasses({
      number: inputClasses,
      text: inputClasses,
      email: inputClasses,
      password: inputClasses,
      submit: {
        outer: "w-full",
        input:
          "btn-block group w-full relative overflow-hidden border-2 border-gray-800 px-30 py-20 font-pally text-2xl text-gray-800 transition-colors duration-300 hover:border-green-400 hover:bg-green-400 disabled:border-gray-300 disabled:hover:bg-transparent group-hover:text-gray-50 group-disabled:text-gray-300 group-disabled:group-hover:text-gray-300 lg:text-3xl",
        label:
          "btn-block__text relative z-10 block transition-colors duration-300 group-hover:text-gray-800 group-disabled:text-gray-300 group-disabled:group-hover:text-gray-300 lg:text-3xl",
      },
    }),
  },
};
