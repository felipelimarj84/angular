import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

    loginForm = this.fb.group({
        email: ['', Validators.required],
        senha: ['', Validators.required],
    });

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
    }

}
