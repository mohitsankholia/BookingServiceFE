package com.mohitsankholia.BusBookingPOC.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Buses {
	
	@Id 
	private int busId;
	private String busNo;
	private String source, destination;
	
	public void setBusId(int busId) {
		this.busId = busId;
	}
	public String getBusNo() {
		return busNo;
	}
	public void setBusNo(String busNo) {
		this.busNo = busNo;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	
}
