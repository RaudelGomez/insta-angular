import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path: "", component: MainContentComponent},
  {path: "contact", component: ContactComponent}
];
