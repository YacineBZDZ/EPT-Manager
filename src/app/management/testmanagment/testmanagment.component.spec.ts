import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TestmanagmentComponent} from './testmanagment.component';

describe('TestmanagmentComponent', () => {
    let component: TestmanagmentComponent;
    let fixture: ComponentFixture<TestmanagmentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestmanagmentComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TestmanagmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
