import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Investment } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  investment!: Investment;
  initial = '0';
  ann = '0';
  duration = '10';
  exp = '5';
  @Output() submit = new EventEmitter<Investment>()
  onSubmit()
  {
    this.investment = {
      initial: Number(this.initial),
      ann: Number(this.ann),
      duration: Number(this.duration),
      exp: Number(this.exp)
    }
    this.submit.emit(this.investment);
  }
}
