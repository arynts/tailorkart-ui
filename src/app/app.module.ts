import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatInputModule, MatDialogModule, MatFormFieldModule, MatSlideToggleModule, MatTableModule, MatStepperModule, MatProgressSpinnerModule, MatSelectModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { SideMenuComponent } from './common/side-menu/side-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './common/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './common/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './features/customers/register/register.component';
import { FaqComponent } from './common/faq/faq.component';
import { AboutComponent } from './common/about/about.component';
import { ContactusComponent } from './common/contactus/contactus.component';
import { MenComponent } from './features/services/men/men.component';
import { WomenComponent } from './features/services/women/women.component';
import { TermsconditionsComponent } from './common/termsconditions/termsconditions.component';
import { KidsComponent } from './features/services/kids/kids.component';
import { ClientPortfoliosComponent } from './features/customers/client-portfolios/client-portfolios.component';
import { VideodemoComponent } from './common/videodemo/videodemo.component';
import { AgentdashboardComponent } from './features/Agents/agentdashboard/agentdashboard.component';
import { AgentLoginComponent } from './features/Agents/agent-login/agent-login.component';
import { ReportsComponent } from './features/billing/reports/reports.component';
import { InvoiceComponent } from './features/billing/invoice/invoice.component';
import { AuditsComponent } from './features/billing/audits/audits.component';
import { DailyreportsComponent } from './features/billing/reports/dailyreports/dailyreports.component';
import { WeeklyreportsComponent } from './features/billing/reports/weeklyreports/weeklyreports.component';
import { MonthlyreportsComponent } from './features/billing/reports/monthlyreports/monthlyreports.component';
import { ReportsbydateComponent } from './features/billing/reports/reportsbydate/reportsbydate.component';
import { CustomerLoginComponent } from './features/customers/customer-login/customer-login.component';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SideMenuComponent,
    FooterComponent,
    CarouselComponent,
    RegisterComponent,
    FaqComponent,
    AboutComponent,
    ContactusComponent,
    MenComponent,
    WomenComponent,
    TermsconditionsComponent,
    KidsComponent,
    ClientPortfoliosComponent,
    VideodemoComponent,
    AgentdashboardComponent,
    AgentLoginComponent,
    ReportsComponent,
    InvoiceComponent,
    AuditsComponent,
    DailyreportsComponent,
    WeeklyreportsComponent,
    MonthlyreportsComponent,
    ReportsbydateComponent,
    CustomerLoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTableModule,
    MatStepperModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VideodemoComponent],
})
export class AppModule { }
