import {Component, OnInit} from '@angular/core';
import {JwtClientService} from '../service/jwt-client.service';
import {TokenService} from '../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
  emailRequest: any = {
    email: null
  };

  constructor(
      private service: JwtClientService,
      private tokenService: TokenService,
      private router: Router
  ) {
  }

  ngOnInit() {
  }

  public getemail(emailRequest: any) {
    console.log('first')
    console.log(emailRequest);
    this.service.forgotPassword(emailRequest).subscribe((response: any) => {
      console.log('Email sent:', response);
      this.router.navigate(['/emailok'])

    }, error => {
      console.error('Failed to send email:', error);
    });
  }
}
