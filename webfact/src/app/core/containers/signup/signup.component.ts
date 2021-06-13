import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {

    signupForm = this.fb.group({
        email: ['', Validators.required],
        senha: ['', Validators.required],
    });

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
    }

}
