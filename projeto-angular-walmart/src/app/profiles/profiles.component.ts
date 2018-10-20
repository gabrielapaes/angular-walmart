import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material'

@Component({
  selector: 'snack-bar-overview-example',
  templateUrl: 'profiles.component.html',
  styleUrls: ['profiles.component.css'],
  
})
export class SnackBarOverviewExample {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */