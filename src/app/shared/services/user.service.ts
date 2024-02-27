import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user = { id: 'U123' };

  constructor() { }

  getUserId(): string {
    return this._user.id;
  }
}
