import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

class RelicLoggerService {
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
RelicLoggerService.ɵprov = ɵɵdefineInjectable({ factory: function RelicLoggerService_Factory() { return new RelicLoggerService(ɵɵinject(HttpClient)); }, token: RelicLoggerService, providedIn: "root" });
RelicLoggerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
RelicLoggerService.ctorParameters = () => [
    { type: HttpClient }
];

class RelicLoggerComponent {
    constructor(svc) {
        this.svc = svc;
    }
    ngOnInit() {
        this.svc.newRelicTest("message test", "plugin section", "vghhcvujk65jj", "gddgddfgfcbb").subscribe(data => {
            console.log("data: " + data);
        });
    }
}
RelicLoggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-relic-logger',
                template: `
    <p>
      relic-logger works!
    </p>
  `
            },] }
];
RelicLoggerComponent.ctorParameters = () => [
    { type: RelicLoggerService }
];

class RelicLoggerModule {
}
RelicLoggerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    RelicLoggerComponent
                ],
                imports: [],
                exports: [
                    RelicLoggerComponent
                ]
            },] }
];

/*
 * Public API Surface of relic-logger
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RelicLoggerComponent, RelicLoggerModule, RelicLoggerService };
//# sourceMappingURL=relic-logger.js.map
