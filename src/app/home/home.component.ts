import { Component, OnInit } from '@angular/core';

interface Lesson {
  title: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  selectedLesson: Lesson | string = 'select a lesson';
  constructor() {}

  ngOnInit() {}

  selectLesson(lesson: Lesson) {
    this.selectedLesson = lesson;
  }
}
