import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StoragemanagementComponent} from './storagemanagement.component';

describe('StoragemanagementComponent', () => {
    let component: StoragemanagementComponent;
    let fixture: ComponentFixture<StoragemanagementComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [StoragemanagementComponent]
        });
        fixture = TestBed.createComponent(StoragemanagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
