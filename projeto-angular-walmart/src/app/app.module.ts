import './polyfills';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule
} from '@angular/material';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessagesComponent }    from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PedidosComponent }    from './pedidos/pedidos.component';
import { NgbdCarouselBasic } from './utils/basic';
import { AppRoutingModule }     from './app-routing.module';
import { NgbdAccordionBasic } from './utils/accordion-basic';
import { SnackBarOverviewExample } from './profiles/profiles.component';

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ]
})

export class DemoMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CdkTableModule,
    CdkTreeModule,
    DemoMaterialModule
    
  ],
   declarations: [
    AppComponent,
    PedidosComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    NgbdCarouselBasic,
    NgbdAccordionBasic,
    SnackBarOverviewExample
  ],
  bootstrap: [ AppComponent ,SnackBarOverviewExample]
})
export class AppModule {   }

platformBrowserDynamic().bootstrapModule(AppModule);

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/