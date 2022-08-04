import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public inputControl = new FormControl('', [Validators.minLength(1)]);
  public formGroup = this.formBuilder.group({
    search: this.inputControl,
  });

  @Output()
  searchChanged: EventEmitter<string> = new EventEmitter<string>();

  private destroyer: Subject<void> = new Subject();

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.inputControl.valueChanges
      .pipe(
        debounceTime(500),
        tap((value) => this.searchChanged.emit(value)),
        takeUntil(this.destroyer)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroyer.next();
    this.destroyer.unsubscribe();
  }
}
