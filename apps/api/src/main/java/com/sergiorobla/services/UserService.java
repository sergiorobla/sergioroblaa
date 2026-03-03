package com.sergiorobla.services;

import java.util.List;

import com.sergiorobla.models.UserModel;

public interface UserService {

	List<UserModel> findAll();

	UserModel findById(Long id);

	UserModel save(UserModel user);

	UserModel update(Long id, UserModel user);

	void delete(Long id);
}
