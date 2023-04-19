import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name: string = "BEN YOUSSEF M'hamed";


  constructor() { }

  ngOnInit() {
    //this.name = this.authService.getUser().name; 
  }

  logout(){
    // this.service.logout();
    // this.router.navigateByUrl("/login");
  }
}
