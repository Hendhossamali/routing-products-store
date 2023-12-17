import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductsComponent } from './products/products.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { RegisterFormComponent } from './register-form/register-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    FormsModule, 
    NavigationBarComponent, 
    ProductsComponent, 
    FooterSectionComponent, 
    RegisterFormComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products-store';
  currentUser: string = "Ahmed";


}
