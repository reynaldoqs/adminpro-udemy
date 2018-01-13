import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Prncipal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'ProgresBar', url: '/progress'},
        {titulo: 'Graficas', url: '/graficas1'},
      ]
    }
  ];

  constructor() { }

}
