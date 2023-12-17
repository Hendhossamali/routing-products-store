import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  todayDate = new Date();
  personWeight = 100.5 ;

  mainThemeColor:string = "Green"

  isLoggedIn:boolean = true;

  classPageTitle: string = "text-center";

  stylePageTitle = {
    'color' : 'red',
    'margin' : '20px',
  }

  products = [
    {
      id: 1,
      title: "Mobile",
      price: 100 ,
      color: "Red",
      discount: 10 ,
      photo: "../assets/products/product-1.avif" , 
    },
    {
      id: 2,
      title: "Car",
      price: 200 ,
      color: "Green",
      discount: 15 ,
      photo: "../assets/products/product-2.avif" , 
    },
    {
      id: 3,
      title: "Dress",
      color: "Blue",
      price: 100 ,
      discount: 10 ,
      photo: "../assets/products/product-3.avif" , 
    },
    {
      id: 4,
      title: "IPhone",
      color: "Yellow",
      price: 100 ,
      discount: 10 ,
      photo: "../assets/products/product-4.avif" , 
    },
    {
      id: 5,
      title: "SumSung",
      color: "Black",
      price: 200 ,
      discount: 15 ,
      photo: "../assets/products/product-5.avif" , 
    },
    {
      id: 6,
      title: "Flower",
      price: 100 ,
      color: "Red",
      discount: 10 ,
      photo: "../assets/products/product-6.avif" , 
    },
    {
      id: 7,
      title: "Glasses",
      color: "Red",
      price: 100 ,
      discount: 10 ,
      photo: "../assets/products/product-7.avif" , 
    },
  ]
}
