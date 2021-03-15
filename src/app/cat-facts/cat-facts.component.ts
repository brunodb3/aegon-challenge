import { Component, OnInit } from '@angular/core';

import { CatFactsService } from './cat-facts.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit {
  facts: any;
  limit = 10;

  constructor(
    public catFactService: CatFactsService
  ) { }

  ngOnInit(): void {
    const limit = this.limit;

    this.catFactService.facts(limit).subscribe((result: any) => {
      this.facts = result;
    });
  }

  search() {
    const searchInput = (document.getElementById('search') as HTMLInputElement)?.value;
    const filtered = [];

    if (searchInput) {
      if (this.facts.data) {
        for (const each in this.facts.data) {
          if (each.includes(searchInput as string)) {
            filtered.push(each);
          }
        }
      }
    } else if (!searchInput) {
      return;
    }

    this.facts = filtered;
  }

}
