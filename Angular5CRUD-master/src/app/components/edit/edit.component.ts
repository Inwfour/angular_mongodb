import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryService } from './../../diary.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  diary: any;
  angForm: FormGroup;
  title = 'Edit Diary';
  constructor(private route: ActivatedRoute, private router: Router, private service: DiaryService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      id: ['', Validators.required ],
      password: ['', Validators.required ],
      topic: ['', Validators.required ],
      story: ['', Validators.required ],
      date: ['', Validators.required ]
   });
  }

  updateCoin(id, password, topic, story, date) {
    this.route.params.subscribe(params => {
    this.service.updateDiary(id, password, topic, story, date, params['id2']);
    this.router.navigate(['diary']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.diary = this.service.editDiarys(params['id2']).subscribe(res => {
        this.diary = res;
      });
    });
  }
}
