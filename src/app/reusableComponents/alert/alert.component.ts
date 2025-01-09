import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Alert } from '../../model/class/Alert';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() alert: Alert = new Alert();

  onAlertToggle() {
    this.alert = new Alert();
  }
}
