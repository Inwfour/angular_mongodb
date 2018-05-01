import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../../diary.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login';
  angForm: FormGroup;
  constructor(private diaryservice: DiaryService, private fb: FormBuilder, private router: Router) {
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
  addDiary(id, password, topic, story, date) {
      this.diaryservice.addDiary(id, password, topic, story, date);
      this.router.navigate(['diary']);
  }

  ngOnInit() {
  }

}
