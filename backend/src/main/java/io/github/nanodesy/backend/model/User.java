package io.github.nanodesy.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.github.nanodesy.backend.uitls.jackson.PasswordDeserializer;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.security.Principal;
import java.util.Set;
import java.util.UUID;

import static com.fasterxml.jackson.annotation.JsonProperty.Access.READ_ONLY;
import static com.fasterxml.jackson.annotation.JsonProperty.Access.WRITE_ONLY;

@Data
public class User implements UserDetails, Principal {
    @JsonProperty(access = READ_ONLY)
    private UUID id;
    @JsonProperty(access = READ_ONLY)
    private Set<GrantedAuthority> authorities;
    private String firstName;
    private String lastName;
    private String email;
    @JsonProperty(access = WRITE_ONLY)
    @JsonDeserialize(using = PasswordDeserializer.class)
    private String password;

    @Override
    public String getName() {
        return email;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
