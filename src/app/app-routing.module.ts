import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules, Router } from '@angular/router';
import { RegisterComponent } from './features/customers/register/register.component';
import { FaqComponent } from './common/faq/faq.component';
import { AboutComponent } from './common/about/about.component';
import { ContactusComponent } from './common/contactus/contactus.component';
import { MenComponent } from './features/services/men/men.component';
import { WomenComponent } from './features/services/women/women.component';
import { KidsComponent }  from './features/services/kids/kids.component'
import { TermsconditionsComponent } from './common/termsconditions/termsconditions.component';
import { AgentLoginComponent } from './features/Agents/agent-login/agent-login.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { ReportsComponent } from './features/billing/reports/reports.component';
import { CustomerLoginComponent } from './features/customers/customer-login/customer-login.component';
import { ApplicationStateService } from './application-state.service';

const desktop_routes: Routes = [
    { path: 'signup', component: RegisterComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'men', component: MenComponent},
    { path: 'women', component: WomenComponent},
    { path: 'kids', component: KidsComponent},
    { path: 'terms', component: TermsconditionsComponent},
    { path: 'conditions', component: TermsconditionsComponent},
    { path: 'agentregistration', component: AgentLoginComponent},
    { path: '', component: CarouselComponent},
    { path: 'reports', component: ReportsComponent}
]

const mobile_routes: Routes = [
    { path: '', component: CustomerLoginComponent},
];

@NgModule({
    // as default we set the desktop routing configuration. if mobile will be started it will be replaced below.
  // note that we must specify some routes here (not an empty array) otherwise the trick below doesn't work...
    imports: [RouterModule.forRoot(desktop_routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {

    public constructor(private router: Router, 
        private applicationStateService: ApplicationStateService){
            if(applicationStateService.getIsMobileResolution()){
                router.resetConfig(mobile_routes);
            }
        }
 }
