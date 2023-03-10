import { Component, OnInit } from '@angular/core';
import { IBoard } from '../interface/IBoard';
import { StorageService } from '../services/storageService';
import { activeBoardKey, boardKey } from '../../constants';
import IColumn  from '../interface/IColumn';
import { NgForm } from '@angular/forms';
import ITask from '../interface/ITask';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements OnInit {

  columns: IColumn[] = [];
  activeBoardname: string = '';
  constructor(private localstorage: StorageService) { }

  ngOnInit(): void { 
    const activeBoard = <IBoard>this.localstorage.get(activeBoardKey);
    const allBoards = this.localstorage.get(boardKey);
    this.columns = allBoards[activeBoard.id].columns;
    this.activeBoardname = activeBoard.name || '';
  }

  addColumn(form: NgForm): void {
    const formData = form.value;
    const activeBoard = <IBoard>this.localstorage.get(activeBoardKey);
    const allBoards = this.localstorage.get(boardKey);
    if (activeBoard) {
      if (activeBoard.columns) {
        const newColumn: IColumn = {
          id: activeBoard.columns.length,
          name: formData.columnName
        }
        allBoards[activeBoard.id].columns.push(newColumn);
        activeBoard.columns.push(newColumn);
      }
      else {
        allBoards[activeBoard.id].columns = [];
        const newColumn: IColumn = {
          id: 0,
          name: formData.columnName
        }
        allBoards[activeBoard.id].columns.push(newColumn);
        activeBoard.columns = [newColumn];
      }
      this.localstorage.set(boardKey, allBoards);
      this.localstorage.set(activeBoardKey, activeBoard);
      window.location.reload();
    }
  }

  taskAdded(newTask: ITask) {
    if(this.columns[newTask.columnId].tasks) {
      this.columns[newTask.columnId].tasks?.push(newTask);
    }
    else {
      this.columns[newTask.columnId].tasks = [newTask];
    }
  }
}
