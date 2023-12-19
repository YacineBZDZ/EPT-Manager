import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StoremanagementComponent} from './storemanagement.component';

describe('StoremanagementComponent', () => {
    let component: StoremanagementComponent;
    let fixture: ComponentFixture<StoremanagementComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [StoremanagementComponent]
        });
        fixture = TestBed.createComponent(StoremanagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
