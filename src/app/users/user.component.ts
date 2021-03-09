import { Component } from '@angular/core';

@Component({
  template: `<div>User Component</div>`
})
export class UserComponent {
  username;
  constructor() {
    this.username = 'Kimserey';
  }
}
