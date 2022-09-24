import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeRegistrationComponent } from './component/authorize-registration/authorize-registration.component';
import { CheckbookRequestsComponent } from './component/checkbook-requests/checkbook-requests.component';
import { LoginComponent } from './component/login/login.component';
import { UserAccountComponent } from './component/user-account/user-account.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {path: '', component:LoginComponent},
  {path:'user-account', component:UserAccountComponent,canActivate:[AuthGuard]},
  {path:'checkbook-requests',component:CheckbookRequestsComponent,canActivate:[AuthGuard]},
  {path:'authorize',component:AuthorizeRegistrationComponent,canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
