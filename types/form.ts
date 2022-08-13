export interface BaseInputProps {
  id?: string;
  label?: string;
  name?: string;
  help?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  validation?: string;
  validationVisibility?: "blur" | "dirty" | "live";
  classes?: {
    outer?: string;
    wrapper?: string;
    label?: string;
    prefix?: string;
    prefixIcon?: string;
    inner?: string;
    suffix?: string;
    suffixIcon?: string;
    input?: string;
    help?: string;
    messages?: string;
    message?: string;
  };
}

export interface FormInputProps extends BaseInputProps {
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
}

export type FormTypes =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export type FormClasses = {
  outer?: string;
  wrapper?: string;
  label?: string;
  prefix?: string;
  prefixIcon?: string;
  inner?: string;
  suffix?: string;
  suffixIcon?: string;
  input?: string;
  help?: string;
  messages?: string;
  message?: string;
};
