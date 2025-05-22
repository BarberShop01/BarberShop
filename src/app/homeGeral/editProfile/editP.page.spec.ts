import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { EditpPage } from './editP.page';

describe('editPage', () => {
  let component: EditpPage;
  let fixture: ComponentFixture<EditpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditpPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EditpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
