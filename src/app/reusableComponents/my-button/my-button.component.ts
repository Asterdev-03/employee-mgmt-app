import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css',
})
export class MyButtonComponent {
  btnText = input<string>('');
  btnClass = input<string>('');
  isDisabled = input<boolean>(true);

  onBtnClick = output<string>();

  onClick() {
    this.onBtnClick.emit('Client');
  }
}
