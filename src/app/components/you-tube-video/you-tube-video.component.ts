import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, Subject } from 'rxjs';
import { getDataAction } from 'src/app/store/actions/app.action';
import { selectCoreState } from 'src/app/store/reducers/app.reducer';

@Component({
  selector: 'app-you-tube-video',
  templateUrl: './you-tube-video.component.html',
  styleUrls: ['./you-tube-video.component.css']
})
export class YouTubeVideoComponent implements OnInit {
  searchTerm: string = ''
  AllData: any;
  debounceSubject = new Subject<void>();
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(selectCoreState).subscribe((state) => {
      let res = state.allData
      this.AllData = []
      if (res.items) {
        res.items.map((x: any) => {
          this.AllData.push(x.snippet)
        })
      }
    })
  }
  searchTermChanged() {
    this.debounceSubject.next();
  }
  ngAfterViewInit(): void {
    this.debounceSubject.pipe(
      debounceTime(250)
    ).subscribe(() => {
      this.getData();
    });
  }

  getData() {
    this.store.dispatch(
      getDataAction({
        key: this.searchTerm
      })
    );
  }

}
