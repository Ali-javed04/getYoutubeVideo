import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from "rxjs";
import { YouTubeVideoService } from "src/app/services/you-tube-video.service";
import { getDataAction, getDataErrorAction, getDataSuccessAction } from "../actions/app.action";


@Injectable()
export class YoutubeVideoEffects {

  $getData = createEffect(() =>
    this.actions
      .pipe(
        ofType<any>(getDataAction),
        mergeMap((action) => this.youTubeVideoService.getYouTubeVideo(action.key)
          .pipe(
            map((data: any) => {
              return getDataSuccessAction({ allData: data })
            }),
            catchError(error => {
              return of(getDataErrorAction());
            })
          )
        )
      )
  )
  constructor(
    private actions: Actions,
    private youTubeVideoService: YouTubeVideoService
  ) { }
}
