import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's3p-angular';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    var theta = document.documentElement.scrollTop / 500 % Math.PI;

    const degree = 90;
    const image = document.getElementById('js-logo');
    this.renderer.setStyle(
      image,
      'transform',
      `rotate(${theta}rad)`
    )
  }
 
}
