import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class PostService {
  constructor(private http: Http) {

  }

  addPost(content: string) {
    const body = JSON.stringify({content: content});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://local.blog-api.com/api/quote', body, {headers: headers});
  }

  getPosts(): Observable<any> {
    return this.http.get('http://local.blog-api.com/api/quotes').map(
      (response: Response) => {
        return response.json().quotes;
      }
    );
  }
;
  updatePost(id: number, newContent: string) {
    const body = JSON.stringify({content: newContent});
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.put('http://local.blog-api.com/api/quote/' + id, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  deletePost(id: number) {
    return this.http.delete('http://local.blog-api.com/api/quote/' + id);
  }
}
