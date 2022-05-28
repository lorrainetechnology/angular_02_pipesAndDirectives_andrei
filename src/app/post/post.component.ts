import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input() postImg = ''
  @Output() imgSelected = new EventEmitter<string>()

  constructor() {
    console.log('constructor', this.postImg)
  }

  ngOnInit() {
    console.log('ngOnInit', this.postImg)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('OnCheck')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('Destroy')
  }
}
