import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CartService} from "../service/cart.service";
import {AuthState} from "../model/AuthState";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isShopkeeper=false;
  isCustomer:boolean=false;
  constructor(public cartService:CartService, public authState:AuthState) {
  }

  ngOnInit(): void {
    if (this.authState.authenticated){
    }
  }
}
