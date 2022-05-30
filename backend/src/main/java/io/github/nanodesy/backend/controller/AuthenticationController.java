package io.github.nanodesy.backend.controller;

import io.github.nanodesy.backend.model.User;
import io.github.nanodesy.backend.service.AuthenticationService;
import io.github.nanodesy.backend.service.UserDetailsService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;
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
    public AuthData signUp(@RequestBody User user) {
        User createdUser = userDetailsService.create(user);
        return new AuthData(createdUser, authenticationService.generateJWTToken(createdUser));
    }

    @PostMapping("/sign-in")
    public AuthData signIn(@RequestBody User user) {
        User loadedUser = (User) userDetailsService.loadUserByUsername(user.getUsername());
        return new AuthData(loadedUser, authenticationService.generateJWTToken(loadedUser));
    }

    @Data
    private static class AuthData {
        private final User user;
        private final String token;
    }
}
