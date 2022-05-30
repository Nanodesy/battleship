package io.github.nanodesy.backend.controller;

import io.github.nanodesy.backend.model.User;
import io.github.nanodesy.backend.service.AuthenticationService;
import io.github.nanodesy.backend.service.UserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final UserDetailsService userDetailsService;
    private final AuthenticationService authenticationService;

    @PostMapping("/sign-up")
    public String signUp(@RequestBody User user) {
        return authenticationService.generateJWTToken(userDetailsService.create(user));
    }

    @PostMapping("/sign-in")
    public String signIn(@RequestBody User user) {
        return authenticationService.generateJWTToken((User) userDetailsService.loadUserByUsername(user.getUsername()));
    }
}
