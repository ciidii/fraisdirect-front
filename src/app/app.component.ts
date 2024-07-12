import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./core/header/header.component";
import {SpinnerComponent} from "./core/spinner/spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SpinnerComponent],
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
