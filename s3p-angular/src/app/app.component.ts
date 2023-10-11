import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's3p-angular';

  // @ViewChild("js-logo")
  // imgChild!: ElementRef;

  
  ngOnInit() {
    // console.log(this.imgChild.nativeElement);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    // console.log(this.imgChild.nativeElement);
    // var theta = document.documentElement.scrollTop / 50 % Math.PI;

    // this.imgChild.nativeElement.transform = 'rotate(' + theta + 'rad)';
  }
 
}
