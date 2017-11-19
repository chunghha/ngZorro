import { Component } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-steps',
  styleUrls: ['steps.component.scss'],
  templateUrl: './steps.component.html'
})
export class StepsComponent {
  current = 0;
  index = 'Login-content';

  pre() {
    this.current -= 1;
    this.changeContent();
  }

  next() {
    this.current += 1;
    this.changeContent();
  }

  done() {
    this._message.success('done');
  }

  changeContent() {
    switch (this.current) {
      case 0: {
        this.index = 'Login-content';
        break;
      }
      case 1: {
        this.index = 'Verification-content';
        break;
      }
      case 2: {
        this.index = 'Pay-content';
        break;
      }
      case 3: {
        this.index = 'Done-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  constructor(private _message: NzMessageService) {}

}
