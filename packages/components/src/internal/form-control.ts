import type { ReactiveController, ReactiveControllerHost } from 'lit';

export interface FormSubmitControllerOptions {
  /** A function that returns the form containing the form control. */
  form: (input: unknown) => HTMLFormElement | null;
  /** A function that returns the form control's name, which will be submitted with the form data. */
  name: (input: unknown) => string;
  /** A function that returns the form control's current value. */
  value: (input: unknown) => unknown | unknown[];
  /** A function that returns the form control's current disabled state. If disabled, the value won't be submitted. */
  disabled: (input: unknown) => boolean;
  /**
   * A function that maps to the form control's reportValidity() function. When the control is invalid, this will
   * prevent submission and trigger the browser's constraint violation warning.
   */
  reportValidity: (input: unknown) => boolean;
}

/* Class used to automatically append arc form element values to the FormData object that's used to submit the form. */
export class FormController implements ReactiveController {
  host?: ReactiveControllerHost & Element;

  form?: HTMLFormElement | null;

  options: FormSubmitControllerOptions;

  constructor(
    host: ReactiveControllerHost & Element,
    options?: Partial<FormSubmitControllerOptions>,
  ) {
    (this.host = host).addController(this);
    this.options = {
      form: (input: HTMLInputElement) => input.closest('form'),
      name: (input: HTMLInputElement) => input.name,
      value: (input: HTMLInputElement) => input.value,
      disabled: (input: HTMLInputElement) => input.disabled,
      reportValidity: (input: HTMLInputElement) =>
        typeof input.reportValidity === 'function'
          ? input.reportValidity()
          : true,
      ...options,
    };
    this.handleFormData = this.handleFormData.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  hostConnected() {
    this.form = this.options.form(this.host);

    if (this.form) {
      this.form.addEventListener('formdata', this.handleFormData);
      this.form.addEventListener('submit', this.handleFormSubmit);
    }
  }

  hostDisconnected() {
    if (this.form) {
      this.form.removeEventListener('formdata', this.handleFormData);
      this.form.removeEventListener('submit', this.handleFormSubmit);
      this.form = undefined;
    }
  }

  handleFormData(event: FormDataEvent) {
    const disabled = this.options.disabled(this.host);
    const name = this.options.name(this.host);
    const value = this.options.value(this.host);

    if (!disabled && !!name && !!value) {
      if (Array.isArray(value)) {
        (value as unknown[]).forEach((val) => {
          event.formData.append(
            name,
            (val as string | number | boolean).toString(),
          );
        });
      } else {
        event.formData.append(
          name,
          (value as string | number | boolean).toString(),
        );
      }
    }
  }

  handleFormSubmit(event: Event) {
    const disabled = this.options.disabled(this.host);
    const { reportValidity } = this.options;

    if (
      this.form &&
      !this.form.noValidate &&
      !disabled &&
      !reportValidity(this.host)
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  /*
  Calling form.submit() seems to bypass the submit event and constraint validation.
  Instead, we can inject a native submit button into the form, click it, then remove it to simulate a standard form submission.
  */
  submit() {
    if (this.form) {
      const button = document.createElement('button');
      this.form.append(button);
      button.click();
      button.remove();
    }
  }
}
