package io.github.nanodesy.backend.uitls;

import org.springframework.stereotype.Component;

import java.time.Instant;

@Component
public class TimeUtils {
    public Instant now() {
        return Instant.now();
    }
}
