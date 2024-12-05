import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./core/header/header.component";
import {SpinnerComponent} from "./core/spinner/spinner.component";
import {NgxSpinnerComponent} from "ngx-spinner";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./core/footer/footer.component";
import {LoginService} from "./core/service/login.service";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SpinnerComponent, CommonModule, NgxSpinnerComponent, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'fraisdirect-frontend';
  constructor(private router: Router,private authService:LoginService) {
  }
  ngOnInit(): void {
    this.authService.loadJwtTokenFromLocalStorage()
  }
}
