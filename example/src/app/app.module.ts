import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './products/product/product.component';
const appRoutes: Routes= [
    {path:'', component: HomeComponent}, //localhost:4200
    {path:'home', component: HomeComponent},
    {path:'products',component: ProductsComponent},
    {path:'products/:id', component: ProductsComponent},
    {path:'users',component: UsersComponent},
    {path:'**',component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    NotfoundComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
