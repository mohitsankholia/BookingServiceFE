package com.mohitsankholia.BusBookingPOC.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mohitsankholia.BusBookingPOC.entity.Buses;
import com.mohitsankholia.BusBookingPOC.repository.Busesrepo;

@Service
public class Busservice {
	
	@Autowired
	Busesrepo brepo;
	
	public List<Buses> listing(){
		return brepo.findAll();
	}
}
