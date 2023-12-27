import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // render courses
  // select a course
  // render selected courses
  courses = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: '2',
      title: 'JavaScript Fundamentals',
      description: 'Learn the fundamentals of Javascript',
      percentComplete: 57,
      favorite: true
    },
    {
      id: '3',
      title: 'Cyber Security Fundamentals',
      description: 'Learn the fundamentals of Cyber Security',
      percentComplete: 6,
      favorite: false
    },
  ];

  selectedCourse: Course = emptyCourse;
  originalTitle = '';
  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course: Course) {
    this.selectedCourse = {...course};
    this.originalTitle = course.title;
  }

  deleteCourse(id: string) {
    console.log('wowzers: ', id);
  }

  updateTitle(title) {
    this.selectedCourse.title = title;
  }

  reset() {
    this.selectCourse({...emptyCourse});
    console.log(this.selectedCourse);
  }

  saveCourse(course){
    console.log('save the course', course);
  }
}
