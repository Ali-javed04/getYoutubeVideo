import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YouTubeVideoComponent } from './components/you-tube-video/you-tube-video.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { YoutubeVideoEffects } from './store/effects/app.effect';
import * as fromAppState from '../app/store/reducers/app.reducer';
@NgModule({
  declarations: [
    AppComponent,
    YouTubeVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ core: fromAppState.reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([YoutubeVideoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
