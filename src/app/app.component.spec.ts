import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { AuthService } from './common/services/auth.service';

const noop = () => {}

const mockAuthService = {
  logout: noop
}

describe('AppComponent', () => {
  let service: AuthService;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    de = fixture.debugElement;
    fixture.detectChanges();
  })


  it ('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  })


  it('should delegate logout responsibility', () => {
    // arrange
    spyOn(service, 'logout').and.callThrough();
    // act
    component.logout();
    //assert
    expect(service.logout).toHaveBeenCalled();
  })
});
