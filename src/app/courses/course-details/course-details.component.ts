import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  @Input() currentCourse: Course;
  @Output() saved = new EventEmitter();
  @Output() cancel = new EventEmitter();
}
