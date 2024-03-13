package com.shegami.dentistmanagement.repositories.staff;

import com.shegami.dentistmanagement.entities.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepository extends JpaRepository<Staff, String> {
}