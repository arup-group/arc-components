import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@arc-web/components';
import '@arc-web/components/src/components/ph-icon/arrow-right/ph-icon-arrow-right';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {}
