import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-simple-standalone',
  templateUrl: './simple-standalone.component.html',
  styleUrls: ['./simple-standalone.component.scss'],
})
export class SimpleStandaloneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
