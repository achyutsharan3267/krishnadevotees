import { Component } from '@angular/core';
declare function header(): any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ngOnInit(): void {
    header();
  }
}
