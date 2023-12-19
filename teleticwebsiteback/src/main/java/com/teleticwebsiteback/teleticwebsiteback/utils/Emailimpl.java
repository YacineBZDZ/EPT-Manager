package com.teleticwebsiteback.teleticwebsiteback.utils;

import com.teleticwebsiteback.teleticwebsiteback.model.Users;
import com.teleticwebsiteback.teleticwebsiteback.repo.UsersRepo;
import com.teleticwebsiteback.teleticwebsiteback.service.UserServiceImpl;
import io.jsonwebtoken.lang.Strings;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Objects;
import java.util.Optional;
@Slf4j
@Service
public class Emailimpl implements UserServiceImpl {
    @Autowired
    private EmailUtils emailUtils;
    @Autowired
    private final UsersRepo usersRepo;

    public Emailimpl(UsersRepo usersRepo) {
        this.usersRepo = usersRepo;
    }

    @Override
    public ResponseEntity<String> forgotPassword(Map<String, String> request) {

        try {


            Optional<Users> impemail = usersRepo.findByEmail(request.get("email"));
            if (!Objects.isNull(impemail) && !Strings.containsWhitespace(impemail.get().getEmail()))

                emailUtils.forgotMail(impemail.get().getEmail(), "Credentails by Management System", impemail.get().getPassword());
                return ResponseEntity.ok("Check your mail ");

//    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid password");
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid email");
    }
}
