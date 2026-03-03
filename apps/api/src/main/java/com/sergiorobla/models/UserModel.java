package com.sergiorobla.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "users")
public class UserModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private String country;
	private String username;
	private String password;

	public UserModel() {

	}

	public UserModel(Long id, String name, String email, String country, String username, String password) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.country = country;
		this.username = username;
		this.password = password;
	}

	// Getters
	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public String getCountry() {
		return country;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	// Setters
	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
