import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module.';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './products/product/product.component';
import { UserComponent } from './users/user/user.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { AuthGuard } from './auth-guard.service';

// const appRoutes: Routes= [
//     {path:'', component: HomeComponent}, //localhost:4200
//     {path:'home', component: HomeComponent},
//     {path:'products',component: ProductsComponent, children: [
//       {path:':id', component: ProductsComponent},
//       {path:':id/edit', component: EditProductComponent}
//     ]},
//     {path:'users',component: UsersComponent, children: [
//       {path:':name',component: UsersComponent}
//     ]},
//     {path:'**',component: NotfoundComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    NotfoundComponent,
    ProductComponent,
    UserComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
