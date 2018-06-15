import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MotelService, AlertService, WindowService, AuthenticationService } from '../../_services/index';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { appConfig } from '../../app.config';
import { MapsAPILoader, AgmMap } from '@agm/core';    // Added AgmMap
import { } from 'googlemaps';
// get path to
const URL = '/assets/';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router, private authService: AuthenticationService,
    private route: ActivatedRoute, private motelService: MotelService, private alertService: AlertService) {
     }
      handler = {
      get: function(target, name) {
        return target.hasOwnProperty(name) ? target[name] : 42;
      }
  };
  img: any = [];
  mapTab: any;
  motel: any = new Proxy({}, this.handler);
  imagePath: String; // path to load img
  checkUser: boolean; // flag to check role to update
  data: any = {}; // sth ...
  totalLike: any; //  ...
  vote_data: any = {}; // data to check if user already like this post
  user: any = {
    firstname: 'default',
    lastname: 'default'
  }; // get author info
  motel_id: any; // get id from query

  ngOnInit() {
    this.motel_id = this.route.snapshot.params['id']; // get motel id from query params
    // get data from server
    this.getMotelDetail(this.motel_id);
    // get vote
     this.motelService.getTotalVote(this.motel_id).then(res => {
      this.totalLike = res;
    }, (err) => {
      console.log(err);
    }
    );
    // this.totalLike = this.motelService.getTotalVote(this.route.snapshot.params['id']).count;

  }
  // open dialog default fuction
  openDialog(): void {
    const dialogRef = this.dialog.open(UserContactDialog, {
      width: '500px',
      data: {motel: this.motel}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // like function
  like()  {
    if (JSON.parse(localStorage.getItem('currentUser')))     {
      this.vote_data.customer_id = JSON.parse(localStorage.getItem('currentUser'))._id ;
      this.vote_data.motel_id = this.motel._id;
      this.motelService.vote(this.vote_data).subscribe(data => {
        this.alertService.success('Thanks for your Vote');      },
      (err) => {this.alertService.error(err); });
    } else {
      this.alertService.error('Please Sign in to Vote or Comment');
    }
  }
  getMotelDetail(id)  {
    this.motelService.findById(id).then((res) => {
      // parse data
      this.motel = res;
      // parse img url
      this.img = this.motel.img;
      this.authService.findById(this.motel.customer).subscribe( resp => {
        this.user = resp;
      }, err => {
        this.alertService.error(err);
      });
      // parse location
      this.data.lat = Number.parseFloat(this.motel.lat) ;
      this.data.lng = Number.parseFloat(this.motel.lng);
      this.data.status = false;
      localStorage.setItem('currentLocation', JSON.stringify(this.data));
      // check role user to edit
      if (JSON.parse(localStorage.getItem('currentUser' ))._id === this.motel.customer )      {
        this.checkUser = true;
      } else {
        this.checkUser = false;
      }
    }, (err) => {
      console.log(err);
    });
  }
  // onClick button save to update data
  saveChange() {
    this.motelService.update(this.motel._id, this.motel).subscribe(data => {
        this.alertService.success(data.json());
      },
      (err) => {this.alertService.error(err); });
  }

  // check data
  passData(model: any) {
    // console.log(model);
    model.forEach(element => {
      if (element.types[0] === 'administrative_area_level_1')      {
        this.motel.city = element.long_name;
      }
      if (element.types[0] === 'administrative_area_level_2')      {
        this.motel.district = element.long_name;
      }
      if (element.types[0] === 'sublocality_level_1')      {
        this.motel.ward = element.long_name;
      }
      if (element.types[0] === 'route')      {
        this.motel.street = element.long_name;
      }
      if (element.types[0] === 'street_number')      {
        this.motel.add = element.long_name;
      }
    });

    console.log(this.motel);
  }

  onNavigate() {
    window.open('https://www.google.com/maps/search/?api=1&query=' + this.data.lat + ',' + this.data.lng, '_blank');
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class UserContactDialog {

  constructor(
    public dialogRef: MatDialogRef<UserContactDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
