import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-manage-bills',
  templateUrl: './manage-bills.component.html',
  styleUrls: ['./manage-bills.component.css']
})
export class ManageBillsComponent implements OnInit {

  time = new Date();
  rxTime = new Date();
  intervalId: any;
  subscription!: Subscription;

  displayedColumns: string[] = ['name', 'gender','dob','id','last_checkup', 'weight', 'disease', 'date', 'status']


  dataSource: any[] = [
    {
      name: "Paul Shawms",
      gender: "Male",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "76",
      disease: "Cancer",
      date: "4/06/2023",
      status: "inactive"
    },

    {
      name: "Kraig Dube",
      gender: "Male",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "76",
      disease: "HIV",
      date: "04/02/2023",
      status: "active"
    },{
      name: "Paul Shawms",
      gender: "Male",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "76",
      disease: "Cancer",
      date: "4/06/2023",
      status: "inactive"
    },
    {
      name: "Emily Moore",
      gender: "Female",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "56",
      disease: "TB",
      date: "25/01/2023",
      status: "inactive"
    },
    {
      name: "Kraig Dube",
      gender: "Male",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "76",
      disease: "HIV",
      date: "04/02/2023",
      status: "active"
    },
    {
      name: "Paul Shawms",
      gender: "Male",
      dob: "22/09/1998",
      id: "640987766T45",
      last_checkup: "13/09/2022",
      weight: "76",
      disease: "Cancer",
      date: "4/06/2023",
      status: "inactive"
    },];

  constructor() { }

  ngOnInit(): void {
  }

  initDateTime(): void{
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        let day = this.rxTime.getDay();
        let month = this.rxTime.getMonth();
        let year = this.rxTime.getFullYear();
        let hour = this.rxTime.getHours();
        let minutes = this.rxTime.getMinutes();
        let seconds = this.rxTime.getSeconds();
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
