import { TestBed } from '@angular/core/testing';

import { YouTubeVideoService } from './you-tube-video.service';

describe('YouTubeVideoService', () => {
  let service: YouTubeVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YouTubeVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
