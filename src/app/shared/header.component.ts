
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'head-comp',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    constructor(private route: Router){
    }
    onLogout(){
        localStorage.removeItem("user")
        this.route.navigate(['/'])
    }
}