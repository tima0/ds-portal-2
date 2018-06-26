import { ToastModule } from 'ng-uikit-pro-standard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';


import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { ErrorModule } from './views/errors/error.module';

// new imports

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers/index';
import { CustomSerializer } from './shared/utils';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './auth/auth.guard';

// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';
// import { AuthModule } from './auth/auth.module';

// const routes: Routes = [
//   {
//       path: 'pages',
//       loadChildren: 'login',
//       // canActivate: [AuthGuard],
//   },
//   {
//       path: '**',
//       redirectTo: '/'
//   }
// ];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    // AuthModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    // RouterModule.forRoot(routes),
    FormsModule,
    SharedModule,
    ViewsModule,
    ErrorModule,
    ToastModule.forRoot()
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer},
    MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

