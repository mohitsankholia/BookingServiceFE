package com.mohitsankholia.BusBookingPOC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mohitsankholia.BusBookingPOC.service.Busservice;
import com.mohitsankholia.BusBookingPOC.service.Passservice;

@RestController
@RequestMapping
public class Redbuscontroller {
	
	@Autowired
	Busservice bservice;
	@Autowired
	Passservice pservice; 
	
	
}
