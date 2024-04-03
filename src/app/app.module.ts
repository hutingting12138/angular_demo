import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DefaultInterceptor } from './core/services/http.service';

const INTERCEPTOR_PROVIDES = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: DefaultInterceptor,
        multi: true
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        ...INTERCEPTOR_PROVIDES
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
