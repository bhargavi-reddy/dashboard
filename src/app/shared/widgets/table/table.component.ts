import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataSource = [];
  @Input() displayedColumns = [];
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource =this.dataSource
    this.displayedColumns =this.displayedColumns
  }

}
