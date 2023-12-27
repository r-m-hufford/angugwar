import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';

interface Lesson {
  title: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons = [];
  lessons$;

  selectedLesson: Lesson | string = 'select a lesson';
  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.lessons = this.lessonsService.lessons;
    this.lessons$ = this.lessonsService.lessons$;
  }

  selectLesson(lesson: Lesson) {
    this.selectedLesson = lesson;
  }
}
