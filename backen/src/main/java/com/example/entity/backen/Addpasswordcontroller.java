package com.example.entity.backen;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/api/v1")
public class Addpasswordcontroller {

    @Autowired
    AddpasswordRepo addpasswordRepository;

    @PostMapping("/addpassword")
    public ResponseEntity<Addpassword> createAddpassword(@RequestBody Addpassword addpassword) {
        Addpassword savedAddpassword = addpasswordRepository.save(addpassword);
        return new ResponseEntity<>(savedAddpassword, HttpStatus.CREATED);
    }

    @GetMapping("/viewpassword")
    public ResponseEntity<List<Addpassword>> getPasswords(
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String website) {
        try {
            List<Addpassword> results;

            if (username != null) {
                results = addpasswordRepository.findByUsernameContainingIgnoreCase(username);
            } else if (website != null) {
                results = addpasswordRepository.findByWebsiteContainingIgnoreCase(website);
            } else {
                results = addpasswordRepository.findAll();
            }

            return results.isEmpty()
                    ? new ResponseEntity<>(HttpStatus.NO_CONTENT)
                    : new ResponseEntity<>(results, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/viewpassword/{id}")
    public ResponseEntity<Addpassword> getPasswordsById(@PathVariable("id") long id) {
        Optional<Addpassword> password = addpasswordRepository.findById(id);
        return password.map(addpassword -> new ResponseEntity<>(addpassword, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // delete the password
    @DeleteMapping("/viewpassword/{id}")
    public ResponseEntity<HttpStatus> deleteAddpassword(@PathVariable("id") long id) {
        try {
            addpasswordRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204 No Content
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // 500
        }

    }

    // update password
    @PutMapping("/viewpassword/{id}")
    public ResponseEntity<Addpassword> updateAddpassword(@PathVariable("id") long id,
            @RequestBody Addpassword addpasswordDetails) {
        Optional<Addpassword> existingAddpassword = addpasswordRepository.findById(id);

        if (existingAddpassword.isPresent()) {
            Addpassword addpasswordToUpdate = existingAddpassword.get();

            // Update fields
            addpasswordToUpdate.setUsername(addpasswordDetails.getUsername());
            addpasswordToUpdate.setPassword(addpasswordDetails.getPassword());
            addpasswordToUpdate.setWebsite(addpasswordDetails.getWebsite());
            addpasswordToUpdate.setUrl(addpasswordDetails.getUrl());
            // Add more fields as needed

            Addpassword updatedAddpassword = addpasswordRepository.save(addpasswordToUpdate);
            return new ResponseEntity<>(updatedAddpassword, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
