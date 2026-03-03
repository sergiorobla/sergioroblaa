package com.sergiorobla.repositories;

import org.springframework.data.repository.CrudRepository;

import com.sergiorobla.models.UserModel;

public interface UserRepository extends CrudRepository<UserModel, Long>{

}
