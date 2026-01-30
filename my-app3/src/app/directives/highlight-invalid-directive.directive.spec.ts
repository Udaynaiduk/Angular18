import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightInvalidDirectiveDirective } from './highlight-invalid-directive.directive';
import { NgControl } from '@angular/forms';

describe('HighlightInvalidDirectiveDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef;
    const mockRenderer2 = {} as Renderer2;
    const mockNgControl = {} as NgControl;
    const directive = new HighlightInvalidDirectiveDirective(mockElementRef, mockRenderer2, mockNgControl);
    expect(directive).toBeTruthy();
  });
});
