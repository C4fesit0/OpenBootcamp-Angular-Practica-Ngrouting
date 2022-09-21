import { Component, Input, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { Results, IRandomContact } from '../../models/randomuser';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  @Input() randomContact : IRandomContact | undefined;

  constructor() { }

  ngOnInit(): void {


  }

}
