
import { Component, AfterViewInit } from '@angular/core';

declare const M: any; // Declare Materialize globally

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const sliders = document.querySelectorAll('.slider');
    M.Slider.init(sliders, {
      indicators: true,
      height: 300,
      duration: 600,
      interval: 3000,
    });
  }
}
