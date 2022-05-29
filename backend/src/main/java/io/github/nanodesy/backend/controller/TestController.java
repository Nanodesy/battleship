package io.github.nanodesy.backend.controller;

import io.github.nanodesy.backend.model.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping
    public User test() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }
}
