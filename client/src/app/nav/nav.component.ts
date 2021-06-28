import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  // Just for practice --- start

  userObj: any = localStorage.getItem('user')
  user = JSON.parse(this.userObj)

  // Just for practice --- end

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

  logout() {
    this.accountService.logout()
  }

}
