import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { editpPage } from './editP.page';

describe('editPage', () => {
  let component: editpPage;
  let fixture: ComponentFixture<editpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [editpPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(editpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
