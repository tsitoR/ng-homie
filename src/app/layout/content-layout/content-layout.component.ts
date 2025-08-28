import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-content-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.scss',
  standalone: true
})
export class ContentLayoutComponent {

}
