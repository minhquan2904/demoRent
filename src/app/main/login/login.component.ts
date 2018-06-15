import { Component, OnInit, Inject } from '@angular/core';
import { AuthenticationService, AlertService } from '../../_services/index';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private alertService: AlertService,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }
  // Init variable
  user: any = {}; // model to login
  registation: any = {}; // model to registation
  returnUrl: string; // url to navigate after login
  loading: boolean;

  handleValidate = {
    usnMinLength: false,
    usnMaxLength: false,
    pwdMinLength: false,
    pwdMaxLength: false
  }; // hanle validation
  handleError = '';
  ngOnInit() {
    this.authService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  before_login() {
    const username = this.user.username;
    const password = this.user.password;
    this.handleValidate = {
    usnMinLength: false,
    usnMaxLength: false,
    pwdMinLength: false,
    pwdMaxLength: false
    };

    if (username.length < 6) {
      this.handleValidate.usnMinLength = true;
    //  console.log('usn min length');
    } else {
      if (username.length > 32 ) {
        this.handleValidate.usnMaxLength = true;
      } else {
        if (password.length < 6) {
          this.handleValidate.pwdMinLength = true;
        //  console.log('usn min length');
        } else {
          if (password.length > 32 ) {
            this.handleValidate.pwdMaxLength = true;
          } else {
            this.login();
          }
        }
      }
    }
  }
  login() {
    this.authService.login(this.user.username, this.user.password)
        .subscribe(
            data => {
              // login successful
              console.log(JSON.parse(localStorage.getItem('currentUser')).role);
              if (JSON.parse(localStorage.getItem('currentUser')).role > 1) {
                this.router.navigate(['/admin']); // navigate to admin page
              } else {
                this.router.navigate([this.returnUrl]);
              }
            },
            error => {
              // login fail , call alert service
              console.log('LOG IN ERROR!');
                this.alertService.error(error);
            });
  }
  register() {
    this.loading = true;
    this.authService.register(this.registation)
        .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }
   // open dialog default fuction
   openDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class RegisterDialog implements OnInit {

  user: any = {};
  model: any = {};
  constructor(
    public dialogRef: MatDialogRef<RegisterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alertService: AlertService,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {

  }
  ngOnInit() {
  }
  register() {
    this.authService.register(this.model)
        .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);

            });
  }
}
