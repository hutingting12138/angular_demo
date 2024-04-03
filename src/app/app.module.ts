import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DefaultInterceptor } from './core/services/http.service';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { StartupService } from '@core';

registerLocaleData(en);
const LANG_PROVIDES = [{ provide: NZ_I18N, useValue: en_US }];

const INTERCEPTOR_PROVIDES = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: DefaultInterceptor,
        multi: true
    }
];

const APPINIT_PROVIDES = [
    StartupService,
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
        ...LANG_PROVIDES,
        ...INTERCEPTOR_PROVIDES,
        ...APPINIT_PROVIDES
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
