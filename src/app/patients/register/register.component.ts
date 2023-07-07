import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";

//Enum of patient criticality levels
enum PatientCriticality{
  normal = 'normal',
  slightly_critical = 'slightly_critical',
  critical = 'critical',
  very_critical = 'very_critical'
}


//Main Component
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) { }
  time = new Date();
  rxTime = new Date();
  intervalId: any;
  subscription!: Subscription;

  genderTypes: String[] = ["MALE","FEMALE","UNSPECIFIED"];
  slideValue: number = 0;
  currentStatus: PatientCriticality = PatientCriticality.normal;
  relationshipTypes: string[] = ["BIOLOGICAL CHILD","BIOLOGICAL PARENT", "OTHER RELATIVE"]
  patientForm!: FormGroup;

  ngOnInit(): void {
    this.initDateTime();
  }

  formatLabel(value: number): number {
    if (value >= 100) {
      const slideVal = Math.round(value / 100);
      return slideVal;
    }
    return value;
  }

  onSliderChange(event: any) {
    this.slideValue = event.value;
    if(this.slideValue >= 35 && this.slideValue <= 50){
      this.currentStatus = PatientCriticality.slightly_critical;
    }else if(this.slideValue >= 50 && this.slideValue <= 75){
      this.currentStatus = PatientCriticality.critical;
    }else if(this.slideValue >= 75 && this.slideValue <= 100){
      this.currentStatus = PatientCriticality.very_critical;
    }else{
      this.currentStatus = PatientCriticality.normal
    }
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
