import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   id?:string;
  student:string []= ["Sneha","Ritu","Nidhi","Parag","Ankit","Zeel","Netra"]
  isActivated:boolean=true;
  studentObj:student[]=[
    {id:101,name:"Sneha"},
    {id:102,name:"Ritu"},
    {id:103,name:"Nidhi"},
    {id:104,name:"Parag"},
    {id:105,name:"Ankit"},
    {id:106,name:"Zeel"},
    {id:107,name:"Netra"}
  ]

}

class student {

  id?: number;
  name?: string;
  constructor(id:number,name:string){
    this.id=id;
    this.name=name;
  }

}


