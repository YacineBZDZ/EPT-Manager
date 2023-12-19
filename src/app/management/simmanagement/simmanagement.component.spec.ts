import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SimmanagementComponent} from './simmanagement.component';

describe('SimmanagementComponent', () => {
    let component: SimmanagementComponent;
    let fixture: ComponentFixture<SimmanagementComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SimmanagementComponent]
        });
        fixture = TestBed.createComponent(SimmanagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
