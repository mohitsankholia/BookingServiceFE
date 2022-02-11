package com.mohitsankholia.BusBookingPOC.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mohitsankholia.BusBookingPOC.entity.Passengers;

@Repository
public interface Passrepo extends JpaRepository<Passengers, Integer> {

}
