package com.example.entity.backen;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddpasswordRepo extends JpaRepository<Addpassword, Long> {

    List<Addpassword> findByWebsiteContainingIgnoreCase(String website);

    List<Addpassword> findByUsernameContainingIgnoreCase(String username);
}
