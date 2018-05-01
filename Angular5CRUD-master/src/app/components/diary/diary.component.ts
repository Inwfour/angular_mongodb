import { DiaryService } from './../../diary.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Diary } from '../../Diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diarys: any;

  constructor(private http: HttpClient, private service: DiaryService) {}

  ngOnInit() {
    this.getDiarys();
  }

  getDiarys() {
    this.service.getDiarys().subscribe(res => {
      this.diarys = res;
    });
  }

  deleteDiary(id2) {
    this.service.deleteDiary(id2).subscribe(res => {
      console.log('Deleted');
    });
  }

}
