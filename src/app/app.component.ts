import {Component, OnInit, VERSION} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {RandomUserService} from './services/random-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RandomUserService]
})
export class AppComponent implements OnInit {
  validateForm: FormGroup;

  isCollapsed = false;
  isVisible = false;
  current = 1;
  ngVersion = VERSION.full;

  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet = [];
  _loading = true;
  _sortValue = null;
  _filterGender = [
    { name: 'male', value: false },
    { name: 'female', value: false }
  ];


  _allChecked = false;
  _indeterminate = false;
  _displayData = [];
  data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }
  ];

  sort(value) {
    this._sortValue = value;
    this.refreshData();
  }

  reset() {
    this._filterGender.forEach(item => {
      item.value = false;
    });
    this.refreshData(true);
  }

  refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }
    this._loading = true;
    const selectedGender = this._filterGender.filter(item => item.value).map(item => item.name);
    this._randomUser.getUsers(this._current, this._pageSize, 'name', this._sortValue, selectedGender).subscribe((data: any) => {
      this._loading = false;
      this._total = 200;
      this._dataSet = data.results;
    });
  }

  _submitForm() {
    for (const i in this.validateForm.controls) {
      if (!!this.validateForm.controls[i]) {
        this.validateForm.controls[ i ].markAsDirty();
      }
    }
  }

  _displayDataChange($event) {
    this._displayData = $event;
    this._refreshStatus();
  }

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => {
        data.checked = true;
      });
    } else {
      this._displayData.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshStatus();
  }

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

  constructor(private fb: FormBuilder, private _randomUser: RandomUserService) {}

  updateConfirmValidator() {
    /** wait for refresh value */
    setTimeout(_ => {
      this.validateForm.controls[ 'checkPassword' ].updateValueAndValidity();
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  }

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email            : [ null, [ Validators.email ] ],
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      nickname         : [ null, [ Validators.required ] ],
      phoneNumberPrefix: [ '+86' ],
      phoneNumber      : [ null, [ Validators.required ] ],
      website          : [ null, [ Validators.required ] ],
      captcha          : [ null, [ Validators.required ] ],
      agree            : [ false ]
    });

    this.refreshData();
  }

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }
}
