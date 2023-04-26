import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'ajouter une absence maladie', route: '/about' },
    { label: 'consulter mes absences maladie', route: '/contact' }
  ];

}
