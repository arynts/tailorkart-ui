import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatInputModule, MatDialogModule, MatFormFieldModule, MatSlideToggleModule, MatTableModule } from '@angular/material';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './common/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './features/register/register.component';
import { LoginComponent } from './features/login/login.component';
import { FaqComponent } from './common/faq/faq.component';
import { AboutComponent } from './common/about/about.component';
import { ContactusComponent } from './common/contactus/contactus.component';
import { MenComponent } from './features/men/men.component';
import { WomenComponent } from './features/women/women.component';
import { TermsconditionsComponent } from './common/termsconditions/termsconditions.component';
import { ServicesComponent } from './features/services/services.component';
import { PricecatalogComponent } from './features/pricecatalog/pricecatalog.component';
import { KidsComponent } from './features/kids/kids.component';
import { ClientPortfoliosComponent } from './features/clients/client-portfolios/client-portfolios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SideMenuComponent,
    FooterComponent,
    CarouselComponent,
    RegisterComponent,
    LoginComponent,
    FaqComponent,
    AboutComponent,
    ContactusComponent,
    MenComponent,
    WomenComponent,
    TermsconditionsComponent,
    ServicesComponent,
    PricecatalogComponent,
    KidsComponent,
    ClientPortfoliosComponent

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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
