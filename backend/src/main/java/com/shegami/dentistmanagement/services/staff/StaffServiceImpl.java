package com.shegami.dentistmanagement.services.staff;

import com.shegami.dentistmanagement.entities.Staff;
import com.shegami.dentistmanagement.repositories.staff.StaffRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class StaffServiceImpl implements StaffService {

    private final StaffRepository staffRepository;
    @Override
    public Staff addStaff(Staff staff) {
        return staffRepository.save(staff);
    }

    @Override
    public List<Staff> loadAllStaff() {
        return staffRepository.findAll();
    }

    @Override
    public Staff getStaffById(String id) {
        return staffRepository.findById(id).orElse(null);
    }

    @Override
    public String deleteStaff(String id) {
        return null;
    }

    @Override
    public Staff updateStaff(Staff staff) {
        return null;
    }
}
