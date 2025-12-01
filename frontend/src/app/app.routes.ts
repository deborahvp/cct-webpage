import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio';
import { NosotrosComponent } from './components/nosotros/nosotros';
import { MinisteriosComponent } from './components/ministerios/ministerios';
import { GruposComponent } from './components/grupos/grupos';
import { ContactoComponent } from './components/contacto/contacto';
import { OracionComponent } from './components/oracion/oracion';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'ministerios', component: MinisteriosComponent },
    { path: 'grupos', component: GruposComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'oracion', component: OracionComponent }
];
