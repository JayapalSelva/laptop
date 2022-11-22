import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptop-update',
  templateUrl: './laptop-update.component.html',
  styleUrls: ['./laptop-update.component.css']
})
export class LaptopUpdateComponent implements OnInit {
  laptop:Laptop;
   id:number;
  constructor(private lapservice:LaptopService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.laptop=new Laptop();
    this.lapservice.viewById(this.id).subscribe(data=>{this.laptop=data;
    },
   error=>console.log(error));

}
goToLaptopList(){
  this.route.navigate(["Laptop-List"]);
 }
 saveLaptop(){
  this.lapservice.add(this.laptop).subscribe(data=>{
   console.log(data);});
   this.goToLaptopList();
    
  
}
onSubmit(){
  console.log(this.laptop);
  this.saveLaptop();
}

}