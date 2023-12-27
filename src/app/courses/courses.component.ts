import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

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
  courses = [];
  selectedCourse: Course = emptyCourse;
  originalTitle = '';
  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
      this.courses = this.courseService.courses;
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
