import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DiaryService {

  result: any;
  constructor(private http: HttpClient) {}

  addDiary(id, password, topic, story, date) {
    const uri = 'http://localhost:4000/diarys/add';
    const obj = {
      id: id,
      password: password,
      topic: topic,
      story: story,
      date: date
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getDiarys() {
    const uri = 'http://localhost:4000/diarys';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editDiarys(id2) {
    const uri = 'http://localhost:4000/diarys/edit/' + id2;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateDiary(id, password, topic, story, date, id2) {
    const uri = 'http://localhost:4000/diarys/update/' + id2;

    const obj = {
      id: id,
      password: password,
      topic: topic,
      story: story,
      date: date
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteDiary(id2) {
    const uri = 'http://localhost:4000/diarys/delete/' + id2;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
