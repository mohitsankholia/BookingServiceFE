package com.mohitsankholia.BusBookingPOC.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mohitsankholia.BusBookingPOC.entity.Buses;

@Repository
public interface Busesrepo extends JpaRepository<Buses, Integer> {

}
