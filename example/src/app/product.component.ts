import { Component } from "@angular/core";
import { ProductRepository } from "./repository.model";
import { Product } from "./product.model";

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]
})

export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    getClasses(id: number): string {
        let product = this.model.getProductById(id);
        return (product.price <= 100 ? "bg-info": "bg-secondary")+ "m-2 p-2"; 
    }
}