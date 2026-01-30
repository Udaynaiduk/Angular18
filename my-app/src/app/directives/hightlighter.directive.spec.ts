import { ElementRef } from '@angular/core';
import { HightlighterDirective } from './hightlighter.directive';

describe('HightlighterDirective', () => {
  let directive: HightlighterDirective;
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('div');  // create dummy element
    directive = new HightlighterDirective(new ElementRef(el));
  });
  it('should create an instance', () => {
    const directive = new HightlighterDirective(new ElementRef(el));
    expect(directive).toBeTruthy();
  });
});
