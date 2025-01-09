export class Alert {
  message: string;
  type: string;
  visible: boolean;

  constructor() {
    this.message = '';
    this.type = '';
    this.visible = false;
  }
}
