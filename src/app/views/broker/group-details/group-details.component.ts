import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  Active = this.Active;
  Inactive = this.Inactive;
  Termed = this.Termed;

  @Input() shadows = true;

  tableData: object[] = [{
    groupName: 'Rocky MH',
    groupId: 10500432,
    status: this.Active,
    subs: 203,
    effective: '01/01/2015',
    renewal: '01/01/2019',
    waitPeriods: '30 Days'
  }, {
      groupName: 'Select Benefits',
      groupId: 10345512,
      status: this.Active,
      subs: 63,
      effective: '07/01/1989',
      renewal: '01/01/2019',
      waitPeriods: '30 Days'
  }, {
    groupName: 'Harmony',
    groupId: 1066758,
    status: this.Active,
    subs: 19,
    effective: '07/01/2016',
    renewal: '01/01/2019',
    waitPeriods: '30 Days'
}];
  constructor() { }

  ngOnInit() {
  }

}
