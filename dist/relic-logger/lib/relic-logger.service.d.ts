import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class RelicLoggerService {
    private http;
    constructor(http: HttpClient);
    newRelicTest(message: string, appSection: string, workspaceID: string, uuid: string): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RelicLoggerService, never>;
}

//# sourceMappingURL=relic-logger.service.d.ts.map