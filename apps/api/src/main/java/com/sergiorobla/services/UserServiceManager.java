package com.sergiorobla.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sergiorobla.repositories.UserRepository;
import com.sergiorobla.models.UserModel;

@Service
public class UserServiceManager implements UserService {

	@Autowired
	private UserRepository repository;

	@Override
	public List<UserModel> findAll() {
		return (List<UserModel>) this.repository.findAll();
	}

	@Override
	public UserModel findById(Long id) {
		return this.repository.findById(id).orElseThrow(() -> new RuntimeException("Producto no encontrado"));
	}

	@Override
	public UserModel save(UserModel product) {
		return this.repository.save(product);
	}

	@Override
	public UserModel update(Long id, UserModel user) {
		UserModel prod = this.repository.findById(id).get();

		prod.setName(user.getName());
		prod.setEmail(user.getEmail());
		prod.setCountry(user.getCountry());
		prod.setUsername(user.getUsername());
		prod.setPassword(user.getPassword());

		return this.repository.save(prod);
	}

	@Override
	public void delete(Long id) {
		repository.deleteById(id);
	}
}
