import { Component } from '@angular/core';
import { RelicLoggerService } from './relic-logger.service';
export class RelicLoggerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsaWMtbG9nZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3JlbGljLWxvZ2dlci9zcmMvbGliL3JlbGljLWxvZ2dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVk1RCxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFlBQW9CLEdBQXVCO1FBQXZCLFFBQUcsR0FBSCxHQUFHLENBQW9CO0lBQUksQ0FBQztJQUVoRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFDLGdCQUFnQixFQUFDLGVBQWUsRUFBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFDLEVBQUU7WUFDdEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7OztHQUlUO2FBR0Y7OztZQVhRLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWxpY0xvZ2dlclNlcnZpY2UgfSBmcm9tICcuL3JlbGljLWxvZ2dlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXJlbGljLWxvZ2dlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICByZWxpYy1sb2dnZXIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBSZWxpY0xvZ2dlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdmM6IFJlbGljTG9nZ2VyU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdmMubmV3UmVsaWNUZXN0KFwibWVzc2FnZSB0ZXN0XCIsXCJwbHVnaW4gc2VjdGlvblwiLFwidmdoaGN2dWprNjVqalwiLFwiZ2RkZ2RkZmdmY2JiXCIpLnN1YnNjcmliZSggZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiICsgZGF0YSk7XG4gICAgfSlcbiAgfVxuXG59XG4iXX0=