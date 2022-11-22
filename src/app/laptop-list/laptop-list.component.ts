import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptop:Laptop[];


  constructor(private lapservice:LaptopService,private router:Router) { }

  ngOnInit(): void {
    this.getLap();
  }



getLap() {
  this.lapservice.getvalues().subscribe(data=>{
  this.laptop=data;
  })
}

delete(id:number){
  this.lapservice.DeleteById(id).subscribe(data=>{
    console.log(data);
    this.getLap();
  });
}
view(id:number){
  this.router.navigate(['laptop-details',id]);
}
update(id:number){
  this.router.navigate(['laptop-update',id])
}

}


