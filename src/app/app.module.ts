import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth-interceptor';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { LogoutDialogComponent } from './dialog/logout-dialog/logout-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { RegisterDialogComponent } from './dialog/register-dialog/register-dialog.component';
import { RegionComponent } from './region/region.component';
import { DepartmentComponent } from './department/department.component';
import { CityComponent } from './city/city.component';
import { AccountComponent } from './account/account.component';
import {ClipboardModule} from '@angular/cdk/clipboard';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'city',
    component: CityComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path: 'region',
    component: RegionComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationComponent,
    LoginComponent,
    LogoutDialogComponent,
    RegisterComponent,
    RegisterDialogComponent,
    RegionComponent,
    DepartmentComponent,
    CityComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatButtonModule,
    ClipboardModule
  ],
  entryComponents: [
    LogoutDialogComponent,
    RegisterDialogComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
