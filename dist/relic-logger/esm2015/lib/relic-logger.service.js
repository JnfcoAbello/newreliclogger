import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RelicLoggerService {
    constructor(http) {
        this.http = http;
    }
    newRelicTest(message, appSection, workspaceID, uuid) {
        const date = Date.now();
        //const workspaceID = this.userSession.workspaceID
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-License-Key': 'f5bd14bc79965831342752df36088696FFFFNRAL'
        });
        const msg = message.length > 255 ? message.substring(0, 255) : message;
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
        };
        console.log("BODY: ", body);
        return this.http.post('https://log-api.newrelic.com/log/v1', body, { headers });
    }
}
RelicLoggerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RelicLoggerService_Factory() { return new RelicLoggerService(i0.ɵɵinject(i1.HttpClient)); }, token: RelicLoggerService, providedIn: "root" });
RelicLoggerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
RelicLoggerService.ctorParameters = () => [
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsaWMtbG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yZWxpYy1sb2dnZXIvc3JjL2xpYi9yZWxpYy1sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUsvRCxNQUFNLE9BQU8sa0JBQWtCO0lBRTdCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRWxDLFlBQVksQ0FBRSxPQUFlLEVBQUMsVUFBa0IsRUFBQyxXQUFvQixFQUFFLElBQVk7UUFDeEYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLGtEQUFrRDtRQUNsRCxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM1QixjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLGVBQWUsRUFBRSwwQ0FBMEM7U0FDOUQsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdEUsTUFBTSxJQUFJLEdBQUc7WUFDVCxTQUFTLEVBQUUsS0FBSztZQUNoQixlQUFlLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQzlDLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsd0JBQXdCLEVBQUUsQ0FBQztZQUMzQixTQUFTLEVBQUUsR0FBRztZQUNkLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLGdCQUFnQixFQUFFLFdBQVc7WUFDN0IsYUFBYSxFQUFFLFVBQVU7WUFDekIsS0FBSyxFQUFFLFlBQVk7U0FFdEIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUNBQXFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7O1lBOUJBLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBSlEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWxpY0xvZ2dlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgcHVibGljIG5ld1JlbGljVGVzdCAobWVzc2FnZTogc3RyaW5nLGFwcFNlY3Rpb246IHN0cmluZyx3b3Jrc3BhY2VJRCA6IHN0cmluZywgdXVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAvL2NvbnN0IHdvcmtzcGFjZUlEID0gdGhpcy51c2VyU2Vzc2lvbi53b3Jrc3BhY2VJRFxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnWC1MaWNlbnNlLUtleSc6ICdmNWJkMTRiYzc5OTY1ODMxMzQyNzUyZGYzNjA4ODY5NkZGRkZOUkFMJ1xuICAgIH0pO1xuICAgIGNvbnN0IG1zZyA9IG1lc3NhZ2UubGVuZ3RoID4gMjU1ID8gbWVzc2FnZS5zdWJzdHJpbmcoMCwyNTUpIDogbWVzc2FnZTtcbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICBcImNoYW5uZWxcIjogXCJERVZcIixcbiAgICAgICAgXCJkYXRldGltZS5kYXRlXCI6IG5ldyBEYXRlKGRhdGUpLnRvRGF0ZVN0cmluZygpLFxuICAgICAgICBcImRhdGV0aW1lLnRpbWV6b25lXCI6IFwiVVRDXCIsXG4gICAgICAgIFwiZGF0ZXRpbWUudGltZXpvbmVfdHlwZVwiOiAzLFxuICAgICAgICBcIm1lc3NhZ2VcIjogbXNnLFxuICAgICAgICBcInRpbWVzdGFtcFwiOiBkYXRlLFxuICAgICAgICBcImRldmljZV91dWlkXCI6IHV1aWQsXG4gICAgICAgIFwid29ya3NwYWNlX3V1aWRcIjogd29ya3NwYWNlSUQsXG4gICAgICAgIFwiYXBwX3NlY3Rpb25cIjogYXBwU2VjdGlvbixcbiAgICAgICAgXCJhcHBcIjogXCJhcHBfcmV0YWlsXCJcblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkJPRFk6IFwiLGJvZHkpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9sb2ctYXBpLm5ld3JlbGljLmNvbS9sb2cvdjEnLGJvZHkseyBoZWFkZXJzIH0pO1xufVxufVxuIl19