import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, tap} from 'rxjs/operators';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    public inputControl: FormControl = new FormControl('', [Validators.minLength(1)]);
    public formGroup: FormGroup;

    @Output()
    searchChanged: EventEmitter<string> = new EventEmitter<string>();

    constructor(private readonly formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({search: this.inputControl})
        this.inputControl.valueChanges.pipe(debounceTime(500), tap(value => this.searchChanged.emit(value))).subscribe()
    }
}
