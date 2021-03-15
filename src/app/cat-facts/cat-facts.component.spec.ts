import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactsService } from './cat-facts.service';
import { CatFactsComponent } from './cat-facts.component';
import { of } from 'rxjs';

describe('CatFactsComponent', () => {
  let component: CatFactsComponent;
  let fixture: ComponentFixture<CatFactsComponent>;
  let catFactServiceStub: jasmine.SpyObj<any> = jasmine.createSpyObj('CatFactsService', ['facts']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatFactsComponent],
      providers: [{
        provide: CatFactsService,
        useValue: catFactServiceStub
      }]
    })
      .compileComponents();

    catFactServiceStub = TestBed.inject(CatFactsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFactsComponent);
    component = fixture.componentInstance;

    catFactServiceStub.facts.and.returnValue(of({
      data: [
        {
          fact: 'Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.',
          length: 142
        }
      ]
    }));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Cat Facts', () => {
    it('should get cat facts', () => {
      expect(catFactServiceStub.facts).toHaveBeenCalled();
    });
  });
});
