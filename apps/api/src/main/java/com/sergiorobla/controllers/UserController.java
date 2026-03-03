package com.sergiorobla.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sergiorobla.models.UserModel;
import com.sergiorobla.services.UserServiceManager;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserServiceManager serviceManager;

	@GetMapping
	@Transactional(readOnly = true)
	public List<UserModel> getUsers() {
		return this.serviceManager.findAll();
	}

	@PostMapping
	@Transactional
	public UserModel postUsers(@RequestBody UserModel user) {
		return this.serviceManager.save(user);
	}

	@GetMapping("/{id}")
	@Transactional(readOnly = true)
	public UserModel getUsersById(@PathVariable Long id) {
		return this.serviceManager.findById(id);
	}

	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<?> putUsers(@PathVariable Long id, @RequestBody UserModel user) {
		Optional<UserModel> product1 = Optional.ofNullable(this.serviceManager.findById(id));
		if (product1.isPresent()) {
			UserModel newUser = product1.get();
			newUser.setName(user.getName());
			newUser.setEmail(user.getEmail());
			newUser.setCountry(user.getCountry());
			newUser.setUsername(user.getUsername());
			newUser.setPassword(user.getPassword());

			return ResponseEntity.status(HttpStatus.CREATED).body(this.serviceManager.update(id, newUser));
		}

		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<?> deleteUsers(@PathVariable Long id) {
		serviceManager.delete(id);
		return ResponseEntity.noContent().build();

	}

}
