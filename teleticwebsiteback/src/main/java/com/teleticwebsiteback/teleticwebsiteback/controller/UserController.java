package com.teleticwebsiteback.teleticwebsiteback.controller;

import com.teleticwebsiteback.teleticwebsiteback.model.Users;
import com.teleticwebsiteback.teleticwebsiteback.service.UserService;
import com.teleticwebsiteback.teleticwebsiteback.utils.EmailUtils;
import com.teleticwebsiteback.teleticwebsiteback.utils.Emailimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
//@PreAuthorize("hasRole('USER')")
@CrossOrigin("*")
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private Emailimpl emailimpl;
    private final UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Users>>getAllUsers(){
        List<Users> users = userService.findallUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
@GetMapping ("/find/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable("id")Long id) {
        Users users = userService.findUsersById(id);
        return new ResponseEntity<>(users, HttpStatus.OK);
}

@DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUsers(@PathVariable("id") Long id){
        userService.deleteUsers(id);
        return new ResponseEntity<>(HttpStatus.OK);
}

/*@GetMapping("/checkToken")
    ResponseEntity<String> checkToken(){
        try{
            return userService.checkToken();
        }catch (Exception ex){
            ex.printStackTrace();
        }
    return new ResponseEntity<>(HttpStatus.OK);}*/

@PostMapping("/forgotpassword")
    ResponseEntity<String> forgotPassword(@RequestBody Map<String, String> request){
    return emailimpl.forgotPassword(request);
}


}
