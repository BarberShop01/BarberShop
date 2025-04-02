import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { locPage } from './loc.page';

describe('locPage', () => {
  let component: locPage;
  let fixture: ComponentFixture<locPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [locPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(locPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
