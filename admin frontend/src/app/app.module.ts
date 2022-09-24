import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import{ FormsModule, NgModel } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizeRegistrationComponent } from './component/authorize-registration/authorize-registration.component';
import { CheckbookRequestsComponent } from './component/checkbook-requests/checkbook-requests.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserAccountComponent } from './component/user-account/user-account.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizeRegistrationComponent,
    CheckbookRequestsComponent,
    LoginComponent,
    NavbarComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
