import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BankmanagementComponent} from './bankmanagement.component';

describe('BankmanagementComponent', () => {
    let component: BankmanagementComponent;
    let fixture: ComponentFixture<BankmanagementComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BankmanagementComponent]
        });
        fixture = TestBed.createComponent(BankmanagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
