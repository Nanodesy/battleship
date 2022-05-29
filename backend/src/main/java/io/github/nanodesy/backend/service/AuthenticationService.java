package io.github.nanodesy.backend.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import io.github.nanodesy.backend.model.User;
import io.github.nanodesy.backend.uitls.TimeUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.Date;

@Service
public class AuthenticationService {
    private static final String SUBJECT = "User";

    private final String jwtSecret;
    private final String applicationName;
    private final TimeUtils timeUtils;
    private final JWTVerifier verifier;

    public AuthenticationService(@Value("${jwt.secret}") String jwtSecret,
                                 @Value("${spring.application.name}") String applicationName,
                                 TimeUtils timeUtils) throws UnsupportedEncodingException {
        this.jwtSecret = jwtSecret;
        this.applicationName = applicationName;
        this.timeUtils = timeUtils;
        this.verifier = JWT.require(Algorithm.HMAC512(jwtSecret))
                .withSubject(SUBJECT)
                .withIssuer(applicationName)
                .build();
    }

    public String generateJWTToken(User user) {
        try {
            return JWT.create()
                    .withSubject(SUBJECT)
                    .withClaim("firstName", user.getFirstName())
                    .withClaim("lastName", user.getLastName())
                    .withClaim("email", user.getEmail())
                    .withIssuedAt(Date.from(timeUtils.now()))
                    .withIssuer(applicationName)
                    .sign(Algorithm.HMAC512(jwtSecret));
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }

    public DecodedJWT verifyJWTToken(String token) {
        return verifier.verify(token);
    }
}
