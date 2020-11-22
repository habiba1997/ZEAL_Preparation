import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BuissnessPageComponent } from "./buissness_page/buissness-page.component";

import { NativeScriptMaterialCardViewModule } from "@nativescript-community/ui-material-cardview/angular";

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptMaterialCardViewModule,
        TNSFontIconModule.forRoot({
            'fa': './assets/fontawesome.css'
        })
    ],
    declarations: [
        AppComponent,
        BuissnessPageComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
