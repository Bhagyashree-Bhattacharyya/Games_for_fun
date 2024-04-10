import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOnClickComponent } from './table-on-click.component';

describe('TableOnClickComponent', () => {
  let component: TableOnClickComponent;
  let fixture: ComponentFixture<TableOnClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableOnClickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableOnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
