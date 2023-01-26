import {Directive, Renderer2, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appDirectivaGeneral]'
})
export class DirectivaGeneralDirective {
    constructor(private renderer: Renderer2, private elementRef: ElementRef) {
        renderer.setStyle(elementRef.nativeElement, 'border', '1px solid #0071f8');
    }
}
