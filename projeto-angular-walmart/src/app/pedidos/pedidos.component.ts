import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnInit {

selectedUserTab = 1;
   tabs = [
     {
       name: 'Title one',
       key: 1,
       active: true
     },
      {
      name: 'Title two',
      key: 2,
      active: false
    },
    {
      name: 'Title 3',
      key: 3,
      active: false
    },
    {
      name: 'Title Four',
      key: 4,
      active: false
    }
   ];

tabChange(selectedTab) {
    console.log('### tab change');
    this.selectedUserTab = selectedTab.key;
    for (let tab of this.tabs) {
        if (tab.key === selectedTab.key) {
          tab.active = true;
        } else {
          tab.active = false;
        }
    }
  };

  constructor() { }

  ngOnInit() {
 
  }
}

