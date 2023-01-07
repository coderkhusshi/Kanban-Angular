package com.cgg.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgg.entity.Task;
import com.cgg.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService{
	
	@Autowired
	TaskRepository taskrepo;

	@Transactional 
	@Override
	public List<Task> showtask() {
		// TODO Auto-generated method stub
		return taskrepo.findAll();
	}

	@Transactional
	@Override
	public int addtask(Task task) {
		// TODO Auto-generated method stub
		Optional<Task> taskid = taskrepo.findById(task.getTaskid());
		taskrepo.saveAndFlush(task);
		return task.getTaskid();
	}

	@Transactional
	@Override
	public Task updatetask(Task task) {
		// TODO Auto-generated method stub
		Optional<Task> previoustask = taskrepo.findById(task.getTaskid());
		Task taskupdate = previoustask.get();
		taskupdate.setDescription(task.getDescription());
		taskupdate.setStatus(task.getStatus());
		taskupdate.setTitle(task.getTitle());
		return taskupdate;
	}

	@Transactional
	@Override
	public void deleteById(int taskid) {
		Optional<Task> tas =taskrepo.findById(taskid);
		taskrepo.deleteById(taskid);
		
		
	}

}
