import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  characters$: Object;

  constructor(private data: DataService) { }

  onKey(value: string) {
    if (!value.length) {
      this.characters$ = [];
      return;
    }
    const pattern = new RegExp(`^(${value})`, 'i');
    this.data.getCharacters(value).subscribe(
      data => this.characters$ = data['results'].filter(person => {
        return pattern.test(person.name);
      })
    );
  }



  ngOnInit() {
  }

}
