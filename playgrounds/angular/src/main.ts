import { bootstrapApplication } from '@angular/platform-browser';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@arc-web/components/src/components/container/arc-container';

@Component({
  standalone: true,
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<arc-container><arc-container>`,
})
export class AppComponent { }

bootstrapApplication(AppComponent).catch(console.error);
