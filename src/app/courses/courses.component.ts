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
    this.fetchCourses();
  }
  
  fetchCourses() {
    this.courseService.all()
      .subscribe((result: any) => this.courses = result);
  }

  saveCourse(course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    return this.courseService.create(course)
      .subscribe(result => this.fetchCourses())
  }
  
  updateCourse(course) {
    return this.courseService.update(course)
      .subscribe(result => this.fetchCourses())
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
}
