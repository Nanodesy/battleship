package io.github.nanodesy.backend.config;

import com.auth0.jwt.interfaces.DecodedJWT;
import io.github.nanodesy.backend.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.actuate.endpoint.SecurityContext;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;

@RequiredArgsConstructor
public class JWTFilter extends OncePerRequestFilter {
    private static final String AUTHORIZATION_HEADER = HttpHeaders.AUTHORIZATION;
    private static final String PREFIX = "Bearer ";

    private final AuthenticationService authenticationService;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        if (!validateAuthorizationHeader(request.getHeader(AUTHORIZATION_HEADER))) {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid JWT Token in Authorization Header");
            return;
        }

        String token = request.getHeader(AUTHORIZATION_HEADER).substring(PREFIX.length());
        DecodedJWT decodedJWT = authenticationService.verifyJWTToken(token);
        UserDetails userDetails = userDetailsService.loadUserByUsername(decodedJWT.getClaim("email").asString());
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails,
                null, Set.of());
        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        }

        filterChain.doFilter(request, response);
    }

    private boolean validateAuthorizationHeader(String headerValue) {
        return headerValue != null
                && !headerValue.isBlank()
                && headerValue.startsWith(PREFIX)
                && !headerValue.substring(PREFIX.length()).isBlank();
    }
}
