import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { PedidosComponent }  from './pedidos/pedidos.component';


import { SnackBarOverviewExample } from './profiles/profiles.component';

const routes: Routes = [
  { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'profiles', component: SnackBarOverviewExample },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'pedidos', component: PedidosComponent }
  

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/