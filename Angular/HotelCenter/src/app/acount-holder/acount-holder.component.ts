import { Component } from '@angular/core';
import { AccountDetails } from './account.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acount-holder',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './acount-holder.component.html',
  styleUrl: './acount-holder.component.css'
})
export class AcountHolderComponent {
  accountholder: AccountDetails[] = [
                              { accNumber: 100, holderName: "Sujeeth", accType: "Savings", amount: 20000, contact: 9876543210 },
                              { accNumber: 101, holderName: "Rahul", accType: "Business", amount: 50000, contact: 9876543211 },
                              { accNumber: 102, holderName: "Praveen", accType: "Savings", amount: 10000, contact: 9876543212 },
                              { accNumber: 103, holderName: "Ramesh", accType: "Current", amount: 30000, contact: 9876543213 },
                              { accNumber: 104, holderName: "Saran", accType: "Savings", amount: 40000, contact: 9876543214 },
                              { accNumber: 105, holderName: "Jeeva", accType: "Business", amount: 60000, contact: 9876543215 },
                              { accNumber: 106, holderName: "Kavin", accType: "Savings", amount: 80000, contact: 9876543216 },
                              { accNumber: 107, holderName: "Kumar", accType: "Current", amount: 70000, contact: 9876543217 }, 
                              { accNumber: 108, holderName: "Raj", accType: "Savings", amount: 90000, contact: 9876543218 },
                              { accNumber: 109, holderName: "Ravi", accType: "Current", amount: 20000, contact: 9876543219 },
                              { accNumber: 110, holderName: "Rajesh", accType: "Business", amount: 30000, contact: 9876543220 }
  ];  
  requiredAmount: number = 20000;
  requiredType: string = "Savings";
}
