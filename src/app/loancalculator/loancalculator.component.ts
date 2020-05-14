import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loancalculator',
  templateUrl: './loancalculator.component.html',
  styleUrls: ['./loancalculator.component.css']
})
export class LoancalculatorComponent implements OnInit {


  

  constructor() { }

  ngOnInit() {
  }


  annualInterstRate :number
  loanAmount :number;
  interestRate :number;
  monthlyInterestRate :number;
  loanTenure :number;
  monthlyPayment :number;

  totalPayment :number;

  totalinterestpayable : number;

  divopen=false;
  
  calculateLoan()
  {
    this.divopen=true;
    this.monthlyInterestRate = this.annualInterstRate/1200;

 //this.monthlyPayment = this.loanAmount + parseInt(this.numberOfYears) + parseInt(this.loanAmount)+ parseInt(this.monthlyInterestRate);
    this.monthlyPayment =  this.loanAmount * this.monthlyInterestRate/(1-1 / Math.pow(1+this.monthlyInterestRate,this.loanTenure*12));
  

    this.totalPayment = this.monthlyPayment * this.loanTenure*12;

    this.totalinterestpayable = this.totalPayment - this.loanAmount;


  }

 

}
