import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TpemanagementComponent} from './tpemanagement.component';

describe('TpemanagementComponent', () => {
    let component: TpemanagementComponent;
    let fixture: ComponentFixture<TpemanagementComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TpemanagementComponent]
        });
        fixture = TestBed.createComponent(TpemanagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
