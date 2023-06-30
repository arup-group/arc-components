import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@arc-web/components';

@Component({
  standalone: true,
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <arc-container></arc-container>
  `,
})
export class AppComponent {}
