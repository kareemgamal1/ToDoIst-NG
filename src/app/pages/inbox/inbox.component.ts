import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { DoneService } from 'src/app/shared-services/done.service';

interface task {
  name: string;
  date: string;
}

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  constructor(private DoneService: DoneService) {}
  ngOnInit(): void {}
  clickedIndex: number;
  faPlus = faPlusSquare;
  sectionName: string = '';
  taskName: string = '';
  taskDate: string = '';
  aboutToAddTask: boolean[] = [false];
  aboutToAddSection: boolean = false;

  taskSections: { name: string; noOfTasks: number; tasks?: task[] }[] = [
    {
      name: '(No Section)',
      noOfTasks: 1,
      tasks: [{ name: 'Call my bitches', date: '2022-02-03' }],
    },
  ];

  onDone(i: number, j: number) {
    this.taskSections[i].tasks?.splice(j, 1);
    this.DoneService.onTaskDone();
    this.taskSections[i].noOfTasks = this.taskSections[i].tasks?.length || 0;
  }

  toggleTask(i: number) {
    this.aboutToAddTask[i] = !this.aboutToAddTask[i];
    this.taskSections[i].noOfTasks = this.taskSections[i].tasks?.length || 0;
    this.taskName = '';
    this.taskDate = '';
  }

  toggleSection() {
    this.aboutToAddSection = !this.aboutToAddSection;
    this.sectionName = '';
  }

  onTaskAdd(i: number) {
    this.taskSections[i].tasks?.push({
      name: this.taskName,
      date: this.taskDate,
    });
    this.toggleTask(i);
  }

  onSectionAdd() {
    this.taskSections.push({
      name: this.sectionName,
      noOfTasks: 0,
      tasks: [],
    });
    this.toggleSection();
  }
  trackByFn(index: number, item: any) {
    return index;
  }
}
