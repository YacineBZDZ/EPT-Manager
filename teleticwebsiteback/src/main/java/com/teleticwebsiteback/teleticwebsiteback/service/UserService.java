package com.teleticwebsiteback.teleticwebsiteback.service;

import com.teleticwebsiteback.teleticwebsiteback.exception.UserNotFoundException;
import com.teleticwebsiteback.teleticwebsiteback.model.Users;
import com.teleticwebsiteback.teleticwebsiteback.repo.UsersRepo;
import com.teleticwebsiteback.teleticwebsiteback.utils.EmailUtils;
import io.jsonwebtoken.lang.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    //    private final AuthenticationService service;
    private final UsersRepo usersRepo;

    @Autowired
    public UserService(UsersRepo usersRepo) {
        this.usersRepo = usersRepo;

    }

    public Users addUsers(Users user) {
        return usersRepo.save(user);
    }

    public List<Users> findallUsers() {
        return usersRepo.findAll();
    }

    public Users updateUsers(Users user) {
        return usersRepo.save(user);
    }


    public Users findUsersById(Long id) {
        return usersRepo.findUsersById(id).orElseThrow(() -> new UserNotFoundException("User by id" + id + "was not found"));
    }

    public void deleteUsers(Long id) {
        usersRepo.deleteById(id);
    }


}
