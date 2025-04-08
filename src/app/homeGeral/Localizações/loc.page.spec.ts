import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { LocPage } from './loc.page';

describe('locPage', () => {
  let component: LocPage;
  let fixture: ComponentFixture<LocPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
