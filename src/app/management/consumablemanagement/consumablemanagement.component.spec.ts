import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConsumablemanagementComponent} from './consumablemanagement.component';

describe('ConsumablemanagementComponent', () => {
    let component: ConsumablemanagementComponent;
    let fixture: ComponentFixture<ConsumablemanagementComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ConsumablemanagementComponent]
        });
        fixture = TestBed.createComponent(ConsumablemanagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
