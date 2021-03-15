import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CatFactsService } from './cat-facts.service';

describe('CatFactsService', () => {
  let service: CatFactsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });

    service = TestBed.inject(CatFactsService);

    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GET facts', () => {
    it('should get the facts', () => {
      service.facts(1).subscribe((result: any) => {
        expect(result).toEqual({
          current_page: 1,
          data: [
            {
              fact: 'Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.',
              length: 142
            }
          ],
          first_page_url: 'https://catfact.ninja/facts?page=1',
          from: 1,
          last_page: 332,
          last_page_url: 'https://catfact.ninja/facts?page=332',
          next_page_url: 'https://catfact.ninja/facts?page=2',
          path: 'https://catfact.ninja/facts',
          per_page: '1',
          prev_page_url: null,
          to: 1,
          total: 332
        });
      });

      const req = httpMock.expectOne('https://catfact.ninja/facts?limit=1');
      expect(req.request.method).toBe('GET');

      req.flush({
        current_page: 1,
        data: [
          {
            fact: 'Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.',
            length: 142
          }
        ],
        first_page_url: 'https://catfact.ninja/facts?page=1',
        from: 1,
        last_page: 332,
        last_page_url: 'https://catfact.ninja/facts?page=332',
        next_page_url: 'https://catfact.ninja/facts?page=2',
        path: 'https://catfact.ninja/facts',
        per_page: '1',
        prev_page_url: null,
        to: 1,
        total: 332
      });
    });
  });
});
