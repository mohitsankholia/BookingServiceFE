package com.mohitsankholia.BusBookingPOC.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mohitsankholia.BusBookingPOC.repository.Passrepo;

@Service
public class Passservice {
	
	@Autowired
	Passrepo prepo;
}
