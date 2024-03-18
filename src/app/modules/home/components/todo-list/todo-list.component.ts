import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [
    { task: 'Minha primeira task', checked: false },
    { task: 'Minha segunda task', checked: false },
  ];

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Deseja realmente limpar a lista?');

    if (confirm) {
      this.taskList = [];
    }
  }
}
