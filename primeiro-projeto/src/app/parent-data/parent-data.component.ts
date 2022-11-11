import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input()
  name: string=''
  @Input()
  userData!: {email: string, cargo: string}



  constructor() { }

  ngOnInit(): void {
  }

}
