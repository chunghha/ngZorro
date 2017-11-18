import {Component, VERSION} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  isVisible = false;
  current = 1;
  ngVersion = VERSION.full;

  showModal =
      () => {
        this.isVisible = true;
      }

  handleOk =
      (e) => {
        console.log('Click OK');
        this.isVisible = false;
      }

  handleCancel =
      (e) => {
        console.log(e);
        this.isVisible = false;
      }

  constructor() {}

}
