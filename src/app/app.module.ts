import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { ExamplesComponent } from './examples/examples.component';
import { AdminComponent } from './examples/child-routes/admin.component';
import { RouteParamsComponent } from './examples/route-params/route-params.component';
import { ProtectedComponent } from './examples/protected/protected.component';
import { LoginComponent } from './login/login.component';
import { DynamicComponent } from './examples/dynamic-component/dynamic-component.component';
import { CircleComponent } from './examples/dynamic-component/circle/circle.component';
import { SquareComponent } from './examples/dynamic-component/square/square.component';
import { TriangleComponent } from './examples/dynamic-component/triangle/triangle.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
      AppComponent, 
      HomeComponent,
      CoursesComponent, 
      CourseDetailsComponent, 
      CoursesListComponent, 
      ExamplesComponent, 
      AdminComponent, 
      RouteParamsComponent, 
      ProtectedComponent, 
      LoginComponent, 
      DynamicComponent,
      CircleComponent,
      SquareComponent,
      TriangleComponent
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
