export class Category {
  value: string;
  viewValue: string;
  icon: string;
  isDefault: boolean;
  constructor() {
    this.icon = '';
    this.value = '';
    this.viewValue = '';
    this.isDefault = true;
  }
}
