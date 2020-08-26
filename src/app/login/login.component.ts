
import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms' 
import { UserService } from '../user.service'
import { Router } from '@angular/router'

@Component({
    selector: 'login-comp',
    templateUrl: './login.component.html'
})
export class LoginComponent{

    @ViewChild('f') form: NgForm

    username: string
    password: string
    enteredPass:string
    constructor(userService: UserService, private router: Router){
        this.username = userService.username
        this.password = userService.password
    }   

    login(){
        if (this.form.value.username === this.username && this.form.value.password === this.password){
            var user = {"username": this.form.value.username, "password": this.form.value.password}
            localStorage.setItem("user", JSON.stringify(user))
            this.router.navigate(['dashboard/event'])
        }
    }

}