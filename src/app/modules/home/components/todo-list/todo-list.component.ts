import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );

  ngDoCheck() {
    this.setLocalStorage();
  }

  public addItemTaskList(event: string) {
    return this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Deseja realmente limpar a lista?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public validateInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Tarefa vazia, deseja deletar?');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => {
        return Number(first.checked) - Number(last.checked);
      });

      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
