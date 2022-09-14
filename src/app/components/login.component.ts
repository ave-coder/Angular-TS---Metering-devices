import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    form!: FormGroup;
    constructor(private auth: HttpService, private router: Router) { }

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(10)])
        })
    }

    // ngOnInit - данный метод вызывается, когда компонент проинициализируется

    printForm() {
        this.auth.postData({
            ...this.form.value,
            "personal_data_access": true,
        })
            .subscribe({
                next: (res: { data: { access_token: string } }) => {

                    localStorage.setItem('token', res.data.access_token);  //  получаем и записываем токен в переменную
                    this.router.navigate(['list']); // редирект на страницу списка
                },
                error: error => console.log(error)
            });
    }
}


