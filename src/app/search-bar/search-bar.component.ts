import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter, Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public formGroup = this.formBuilder.group({
    search: ['', [Validators.minLength(1)]],
  });

  @Output()
  public searchChanged = new EventEmitter<string>();

  #destroyer = new Subject<void>();

  constructor(private readonly formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.formGroup.controls.search.valueChanges
      .pipe(
        debounceTime(500),
        filter((value): value is string => !!value?.length),
        tap((value) => this.searchChanged.emit(value)),
        takeUntil(this.#destroyer)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.#destroyer.next();
    this.#destroyer.unsubscribe();
  }

  public clearSearch(): void {
    this.formGroup.reset();
  }
}
