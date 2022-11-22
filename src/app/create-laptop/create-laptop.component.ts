import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';
import { LaptopListComponent } from '../laptop-list/laptop-list.component';
import { BrandService } from '../brand.service';
import { Brand } from '../brand';


@Component({
  selector: 'app-create-laptop',
  templateUrl: './create-laptop.component.html',
  styleUrls: ['./create-laptop.component.css']
})
export class CreateLaptopComponent implements OnInit {
  laptop:Laptop=new Laptop();
  activebrands:String[];

  constructor(private laptopservice:LaptopService,private route:Router, private br:BrandService) { }

  ngOnInit(): void {
    this.getbrand();
  }
goToLaptopList(){
  this.route.navigate(["laptop-list"])

}
saveLaptop(){
  this.laptopservice.add(this.laptop).subscribe(data=>{
    console.log(data);  
       
  });
  this.goToLaptopList();
  
 
}
onSubmit(){
  console.log(this.laptop);
  this.saveLaptop();
}
getbrand(){
  this.br.get().subscribe(data=>{console.log(data); this.activebrands=data ;});
}

}
