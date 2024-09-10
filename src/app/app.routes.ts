import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TestResolver } from './resolver/test.resolver';

export const routes: Routes = [{
  path: 'main',
  component: MainPageComponent,
  resolve: {
    'test': TestResolver
  }
}];
