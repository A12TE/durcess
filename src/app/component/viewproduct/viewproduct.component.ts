import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent {
 product:any;

 constructor(private rs:Router,private service:ProductService){}

 ngOnInit(){
    this.service.getallproduct().subscribe((res)=>{
       this.product=res;
       console.log(this.product);
    })
 }

}
