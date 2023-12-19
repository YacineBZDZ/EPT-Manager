import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StocktpeComponent} from './stocktpe.component';

describe('StockTpeComponent', () => {
    let component: StocktpeComponent;
    let fixture: ComponentFixture<StocktpeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StocktpeComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(StocktpeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
