package io.github.nanodesy.backend.service;

import io.github.nanodesy.backend.model.User;
import io.github.nanodesy.backend.repostory.UserRepository;
import io.github.nanodesy.backend.uitls.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {
    private final UserRepository userRepository;
    private final UserMapper mapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return mapper.map(userRepository.findByEmail(username).orElseThrow());
    }

    public User create(User user) {
        return mapper.map(userRepository.save(mapper.map(user)));
    }
}
