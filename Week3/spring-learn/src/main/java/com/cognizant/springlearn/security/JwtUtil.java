package com.cognizant.springlearn.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.Key;
import java.util.Date;

public class JwtUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(JwtUtil.class);

    private static final String SECRET_PHRASE = "spring-learn-secretkey-spring-learn-secretkey";
    private static final Key SIGNING_KEY = Keys.hmacShaKeyFor(SECRET_PHRASE.getBytes());
    private static final long EXPIRATION_MILLIS = 1200000; // 20 minutes

    public static String generateToken(String user) {
        LOGGER.info("Start");
        String token = Jwts.builder()
                .setSubject(user)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_MILLIS))
                .signWith(SIGNING_KEY, SignatureAlgorithm.HS256)
                .compact();
        LOGGER.debug("Generated token for user={}", user);
        LOGGER.info("End");
        return token;
    }

    public static String getUserFromToken(String token) {
        try {
            Jws<Claims> jws = Jwts.parserBuilder()
                    .setSigningKey(SIGNING_KEY)
                    .build()
                    .parseClaimsJws(token);
            return jws.getBody().getSubject();
        } catch (JwtException ex) {
            LOGGER.debug("Token validation failed: {}", ex.getMessage());
            return null;
        }
    }
}
