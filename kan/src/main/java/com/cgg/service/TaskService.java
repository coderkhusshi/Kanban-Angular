package com.cgg.service;

import java.util.List;

import com.cgg.entity.Task;

public interface TaskService {

	List<Task> showtask();

	int addtask(Task task);

	Task updatetask(Task task);

	void deleteById(int taskid);

}
