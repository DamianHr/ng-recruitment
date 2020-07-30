import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public inputControl: FormControl = new FormControl('', [
    Validators.minLength(1),
  ]);
  public formGroup: FormGroup = this.formBuilder.group({
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
