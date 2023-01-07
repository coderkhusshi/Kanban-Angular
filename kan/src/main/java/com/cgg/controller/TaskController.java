package com.cgg.controller;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cgg.entity.Task;
import com.cgg.service.TaskService;



@RestController
@CrossOrigin
@RequestMapping(path="/task")
public class TaskController {
	
	@Autowired
	private TaskService taskService;
	
	@GetMapping(produces = "application/json")
	public List<Task> showtask(){
		List<Task> taskList = taskService.showtask();
		@SuppressWarnings("unused")
		Iterator<Task> task = taskList.iterator();
		return taskList;
	}
	
	@PostMapping(consumes = "application/json", produces = "application/json")
	ResponseEntity<Task> addtask(@RequestBody Task task) {
		@SuppressWarnings("unused")
		int id = taskService.addtask(task);
		return ResponseEntity.ok(task);
	}
	
	@PutMapping(consumes = "application/json", produces = "application/json")
	ResponseEntity<Task> updatetask(@RequestBody Task task) {
		Task tas = taskService.updatetask(task);
		return new ResponseEntity<Task>(task, HttpStatus.ACCEPTED);
	}
	
	@SuppressWarnings({"rawtypes", "unchecked"})
	@DeleteMapping("/{taskid}")
	ResponseEntity dele(@PathVariable("taskid") int taskid)  {
		taskService.deleteById(taskid);
		return new ResponseEntity("Customer with ID" + taskid + "is deleted", HttpStatus.OK);
	}

}
