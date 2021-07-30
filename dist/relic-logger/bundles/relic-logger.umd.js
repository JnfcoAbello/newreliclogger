(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('relic-logger', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['relic-logger'] = {}, global.ng.core, global.ng.common.http));
}(this, (function (exports, i0, i1) { 'use strict';

    var RelicLoggerService = /** @class */ (function () {
        function RelicLoggerService(http) {
            this.http = http;
        }
        RelicLoggerService.prototype.newRelicTest = function (message, appSection, workspaceID, uuid) {
            var date = Date.now();
            //const workspaceID = this.userSession.workspaceID
            var headers = new i1.HttpHeaders({
                'Content-Type': 'application/json',
                'X-License-Key': 'f5bd14bc79965831342752df36088696FFFFNRAL'
            });
            var msg = message.length > 255 ? message.substring(0, 255) : message;
            var body = {
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
            return this.http.post('https://log-api.newrelic.com/log/v1', body, { headers: headers });
        };
        return RelicLoggerService;
    }());
    RelicLoggerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RelicLoggerService_Factory() { return new RelicLoggerService(i0.ɵɵinject(i1.HttpClient)); }, token: RelicLoggerService, providedIn: "root" });
    RelicLoggerService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    RelicLoggerService.ctorParameters = function () { return [
        { type: i1.HttpClient }
    ]; };

    var RelicLoggerComponent = /** @class */ (function () {
        function RelicLoggerComponent(svc) {
            this.svc = svc;
        }
        RelicLoggerComponent.prototype.ngOnInit = function () {
            this.svc.newRelicTest("message test", "plugin section", "vghhcvujk65jj", "gddgddfgfcbb").subscribe(function (data) {
                console.log("data: " + data);
            });
        };
        return RelicLoggerComponent;
    }());
    RelicLoggerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-relic-logger',
                    template: "\n    <p>\n      relic-logger works!\n    </p>\n  "
                },] }
    ];
    RelicLoggerComponent.ctorParameters = function () { return [
        { type: RelicLoggerService }
    ]; };

    var RelicLoggerModule = /** @class */ (function () {
        function RelicLoggerModule() {
        }
        return RelicLoggerModule;
    }());
    RelicLoggerModule.decorators = [
        { type: i0.NgModule, args: [{
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

    exports.RelicLoggerComponent = RelicLoggerComponent;
    exports.RelicLoggerModule = RelicLoggerModule;
    exports.RelicLoggerService = RelicLoggerService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=relic-logger.umd.js.map
