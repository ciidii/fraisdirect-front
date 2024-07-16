import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./core/header/header.component";
import {SpinnerComponent} from "./core/spinner/spinner.component";
import {NgxSpinnerComponent} from "ngx-spinner";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./core/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SpinnerComponent,CommonModule,
    NgxSpinnerComponent,
    FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'fraisdirect-frontend';
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.navigateByUrl("/customer")
  }
}
