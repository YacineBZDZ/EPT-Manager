import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EmailokComponent} from './emailok.component';

describe('EmailokComponent', () => {
    let component: EmailokComponent;
    let fixture: ComponentFixture<EmailokComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EmailokComponent]
        });
        fixture = TestBed.createComponent(EmailokComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
