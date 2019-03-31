import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public posts: any;
  public url: string;
  public q: any;

  constructor(private route: ActivatedRoute, private http: HttpClient){


    route.queryParams.subscribe(param => { 

      if(param.q){
        this.q = param.q;
      }else{
        this.q = '';
      }
      
      console.log(param.q)

      this.url = 'https://www.node-knowledgebase-api.pnhdevelopment.com/wp-json/wp/v2/posts?_embed&search=' + this.q;

      this.http.get(this.url).subscribe(res => {
        this.posts = res;
      });

    });


  }

  ngOnInit() {

  }

  scrollUp(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  loadImg(ev){
    ev.style.opacity = 1;
  }


}

