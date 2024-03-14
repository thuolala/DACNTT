import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogupComponent } from './logup/logup.component';

@NgModule({
  declarations: [

    DashboardComponent,
    LoginComponent,
    LogupComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule,
    NgbModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [] 
})
export class AppModule { }
