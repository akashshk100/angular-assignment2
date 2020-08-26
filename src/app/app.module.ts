import { BrowserModule} from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { HeaderComponent } from './shared/header.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service'
import {PasswordValidatorDirective} from './shared/password-validator.directive'
import { AvailableBooksComponent } from './dashboard/available-books/available-books.component';
import { IssuesComponent } from './dashboard/issues/issues.component'
import { AuthGaurd } from './auth/auth-guard.service';
import { LoginAuthGuard } from './auth/login-auth-guard.service';


function loadUserConfig(http: HttpClient, userService: UserService): (() => Promise<boolean>) {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve: (a: boolean) => void): void => {
       http.get('./assets/app.config.json')
        .subscribe((x: UserService) => {
          userService.username = x.username
          userService.password = x.password
          resolve(true);
        })
    })
  }
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    AvailableBooksComponent,
    IssuesComponent,
    PasswordValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadUserConfig,
      deps: [
        HttpClient,
        UserService
      ],
      multi : true
    },
    UserService,
    AuthGaurd,
    LoginAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
