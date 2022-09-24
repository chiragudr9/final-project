import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { CheckbookRequest } from 'src/app/model/checkbook-request';
import { CheckbookService } from 'src/app/Service/checkbook.service';
@Component({
  selector: 'app-checkbook-requests',
  templateUrl: './checkbook-requests.component.html',
  styleUrls: ['./checkbook-requests.component.css']
})
export class CheckbookRequestsComponent implements OnInit {

  
  checkbookrequests!: CheckbookRequest[];
  term!: string;

  constructor(public checkbookService: CheckbookService) { }

  ngOnInit(): void {
    this.checkbookService.getRequestsData().subscribe(res => {
      this.checkbookrequests = res
    });
  }

  getData() {

  }

  confirmRequest(account) {
    this.checkbookService.confirmCheckbookService(account).subscribe(res=>this.ngOnInit());
  }
}
