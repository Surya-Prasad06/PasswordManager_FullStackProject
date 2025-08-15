package com.example.entity.backen;

import org.springframework.boot.autoconfigure.AutoConfigureOrder;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "savedpassword")
public class Addpassword {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "username")
    private String username;
    @Column(name = "website")
    private String website;
    @Column(name = "url")
    private String url;
    @Column(name = "password")
    private String password;

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getUsername() {
<<<<<<< HEAD
        return AESUtil.decrypt(username);
    }
    public void setUsername(String username) {
        this.username = AESUtil.encrypt(username);
    }
    public String getWebsite() {
        return AESUtil.decrypt(website);
    }
    public void setWebsite(String website) {
        this.website = AESUtil.encrypt(website);
    }
    public String getPassword() {
        return AESUtil.decrypt(password);
    }
    public void setPassword(String password) {
        this.password = AESUtil.encrypt(password);
    }
    public String getUrl() {
        return AESUtil.decrypt(url);
    }
    public void setUrl(String url) {
        this.url = AESUtil.encrypt(url);
    }
}

//this.encryptedName = AESUtil.encrypt(name);
//  return AESUtil.decrypt(encryptedName);
=======
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getWebsite() {
        return website;
    }
    public void setWebsite(String website) {
        this.website = website;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
}
>>>>>>> f854dabb803428c63c5a19879b78171918a47c5c
