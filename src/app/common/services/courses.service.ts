import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient){
  }

  all(): any{
    return this.http.get(this.getUrl())
  }

  findOne(id) {
    return this.http.get(this.getUrlWithId(id))
  }

  create(course) {
  return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.put(this.getUrlWithId(course.id), course)
  }

  delete(id) {
    return this.http.delete(this.getUrlWithId(id))
  }

  

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${BASE_URL}${this.model}/${id}`
  }

  courses: Course[] = [
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
}
