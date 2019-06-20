import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  authenticated = false;
  role ="";

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get('api/user', {headers: headers}).subscribe(response => {
            if (response && response['name']) {
                this.authenticated = true;
                if(response['principal']) {this.role = response['principal']['role'];}
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }

}
