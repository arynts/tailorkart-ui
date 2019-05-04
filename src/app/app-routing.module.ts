import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { FaqComponent } from './common/faq/faq.component';
import { AboutComponent } from './common/about/about.component';
import { ContactusComponent } from './common/contactus/contactus.component';
import { MenComponent } from './features/men/men.component';
import { WomenComponent } from './features/women/women.component';
import { KidsComponent }  from './features/kids/kids.component'
import { TermsconditionsComponent } from './common/termsconditions/termsconditions.component';
import { ServicesComponent } from './features/services/services.component';
import { PricecatalogComponent } from './features/pricecatalog/pricecatalog.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = [
    // { path: '', component: SideMenuComponent},
    { path: 'signup', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'men', component: MenComponent},
    { path: 'women', component: WomenComponent},
    { path: 'kids', component: KidsComponent},
    { path: 'terms', component: TermsconditionsComponent},
    { path: 'conditions', component: TermsconditionsComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'pricecatelog', component: PricecatalogComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
