import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { sobrePage } from './sobre.page';

describe('sobrePage', () => {
  let component: sobrePage;
  let fixture: ComponentFixture<sobrePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [sobrePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(sobrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
