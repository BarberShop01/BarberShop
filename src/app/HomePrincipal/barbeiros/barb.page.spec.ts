import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { barbPage } from './barb.page';;

describe('barbPage', () => {
  let component: barbPage;
  let fixture: ComponentFixture<barbPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [barbPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(barbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
