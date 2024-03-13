package com.shegami.dentistmanagement.services.staff;

import com.shegami.dentistmanagement.entities.Staff;

import java.util.List;

public interface StaffService {

    public Staff addStaff(Staff staff);

    List<Staff> loadAllStaff();

    Staff getStaffById(String id);
    String deleteStaff(String id);

    Staff updateStaff(Staff staff);
}
