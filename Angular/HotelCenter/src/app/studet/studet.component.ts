import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studet.component.html',
  styleUrl: './studet.component.css'
})
  
  
export class StudetComponent {
  studentName: String = 'Sujeeth';
  studentMark: Number = 100;
  DOJ: Date = new Date();
  fontColor: String = 'blue';
  colored: String = "test";
  changes: String = "red";

  displayMessage() {
    alert('Student Name: ' + this.studentName + '\n' + 'Student Mark: ' + this.studentMark + '\n' + 'Date of Joining: ' + this.DOJ);
  }
}
