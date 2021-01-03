import { Component } from '@angular/core'
import { Task } from './task'

const TASKS: Task[] = [
  { id: 11, name: '企画ロードマップ作成' },
  { id: 12, name: '山田さんにメール返信' },
  { id: 13, name: 'Angular2キャッチアップ' },
  { id: 14, name: 'ブログ更新' },
  { id: 15, name: '新卒技術研修' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'todo-app';
	task: Task = {
		id: 1,
		name: '田中さんにメール'
	}
	tasks = TASKS;
	
	selectedTask: Task

	onSelect(task: Task): void {
		this.selectedTask = task;
	}
}
