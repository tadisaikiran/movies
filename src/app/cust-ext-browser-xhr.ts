import {Injectable} from '@angular/core';
import {BrowserXhr} from '@angular/http';
@Injectable()

export class CustExtBrowserXhr extends BrowserXhr {
  constructor() {
      super();
  }
  build(): any {
    const xhr = super.build();
    // xhr.withCredentials = true;
    return <any>(xhr);
  }
}
