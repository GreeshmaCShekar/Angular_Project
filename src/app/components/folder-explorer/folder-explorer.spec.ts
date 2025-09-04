import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderExplorer } from './folder-explorer';

describe('FolderExplorer', () => {
  let component: FolderExplorer;
  let fixture: ComponentFixture<FolderExplorer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderExplorer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderExplorer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
