import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageObrigadoComponent } from './pages/page-obrigado/page-obrigado.component';
import { environment } from '../environments/environment';

export const routes: Routes = [
  { path: '', component: PageHomeComponent, title: 'Pereira Guincho Taubaté: Guincho em Taubaté 24 horas' },
  { path: 'obrigado', component: PageObrigadoComponent, title: environment.companyName },
  
];
