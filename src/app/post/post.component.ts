import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  public post: any;
  public url: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private titleService: Title
  ){ }

  ngOnInit() {

  	this.url = 'https://www.node-knowledgebase-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&slug=' + this.route.snapshot.paramMap.get('slug');

  	this.http.get(this.url).subscribe(res => {
    	this.post = res[0];

      this.titleService.setTitle( this.post.title.rendered + ' | Node Knowledgebase');
  	});



  }

  loadImg(ev){
    ev.style.opacity = 1;
  }

}

