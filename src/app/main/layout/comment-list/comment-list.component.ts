import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../../_services/index';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  constructor(private commentService: CommentService, private route: ActivatedRoute) { }
  @Input()motelID;
  motel_id: any;
  comments: any = [];
  ngOnInit() {
    this.motel_id = this.route.snapshot.params['id'];
    this.getCommentList();
  }
  getCommentList() {
    this.commentService.findByMotel(this.motel_id).then( res => {
      this.comments = res;
      this.comments.forEach(element => {
        const created = new Date(element.created_at);
        const date = created.getDate();
        const month = created.getMonth() + 1;
        const year = created.getFullYear();
        const time = date + '/' + month + '/' + year;

        const timeAgo = ( (new Date()).getTime() - created.getTime() ) / (3600 * 24); // return minutes ago
        if ( timeAgo < 60 ) { // minutes
          element.time = Number.parseInt(timeAgo.toString()) + ' minutes ago';
        } else { // hours
          if (timeAgo < (60 * 24) ) {
            element.time = (Number.parseInt(timeAgo.toString()) / 60 ) + ' hours ago';
          } else {
            element.time = time;
          }
        }
      });
    }, err => {
    });


  }
}
