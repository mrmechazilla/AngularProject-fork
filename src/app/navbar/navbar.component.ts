import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];

}
