import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RelicLoggerService {

  constructor(private http: HttpClient) { }

  public newRelicTest (message: string,appSection: string,workspaceID : string, uuid: string): Observable<any> {
    const date = Date.now();
    //const workspaceID = this.userSession.workspaceID
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-License-Key': 'f5bd14bc79965831342752df36088696FFFFNRAL'
    });
    const msg = message.length > 255 ? message.substring(0,255) : message;
    const body = {
        "channel": "DEV",
        "datetime.date": new Date(date).toDateString(),
        "datetime.timezone": "UTC",
        "datetime.timezone_type": 3,
        "message": msg,
        "timestamp": date,
        "device_uuid": uuid,
        "workspace_uuid": workspaceID,
        "app_section": appSection,
        "app": "app_retail"

    }
    console.log("BODY: ",body);
    return this.http.post('https://log-api.newrelic.com/log/v1',body,{ headers });
}
}
