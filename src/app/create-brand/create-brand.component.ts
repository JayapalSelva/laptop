import { Component, OnInit } from '@angular/core';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {
  brand:Brand=new Brand();

  constructor(private brandservice:BrandService,private route:Router) { }

  ngOnInit(): void {
   this.gotoBrandList;

}

gotoBrandList(){
  this.route.navigate(['brand-list']);
}
saveBrand(){
  
  this.brandservice.add(this.brand).subscribe(data=>{
    console.log(data);
  }); 
  this.gotoBrandList();
}

onsubmit(){
  console.log(this.brand)
  this.saveBrand();
}

}