import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHotSkillsComponent } from './hot-skills.component';

describe('PageHotSkillsComponent', () => {
  let component: PageHotSkillsComponent;
  let fixture: ComponentFixture<PageHotSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHotSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHotSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
