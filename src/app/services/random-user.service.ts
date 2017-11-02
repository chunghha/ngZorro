import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class RandomUserService {
  private randomUserUrl = 'https://api.randomuser.me/';

  constructor(private http: HttpClient) {}

  getUsers(PageIndex = 1, pageSize = 10, sortField = '', sortOrder = '') {
    return this.http.get(`${this.randomUserUrl}?results=${pageSize}&page=${PageIndex}&sortField=${sortField}&sortOrder=${sortOrder}`)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  extractData(res: Response) {
    const body = res;
    return body || {};
  }

  handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead

    return ErrorObservable.create(new Error(errMsg));
  }

}
