import { Component } from '@angular/core';

import { WheelsPage } from '../wheels/wheels';
import { TemplatesPage } from '../templates/templates';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TemplatesPage;
  tab2Root = WheelsPage;

  constructor() {

  }
}
