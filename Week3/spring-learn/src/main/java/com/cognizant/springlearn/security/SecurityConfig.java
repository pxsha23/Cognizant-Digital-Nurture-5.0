package com.cognizant.springlearn.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/**
 * v2: uses explicit AntPathRequestMatcher instead of the bare-string
 * requestMatchers("/country") overload. The bare-string overload resolves
 * via Spring MVC's HandlerMapping introspection, which can behave
 * unexpectedly depending on how the controller method is mapped
 * (@RequestMapping vs @GetMapping, method-less mappings, etc).
 * AntPathRequestMatcher does a direct literal path match against the raw
 * request URI, with no MVC involvement — removes that ambiguity entirely.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .httpBasic(basic -> {})
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(new AntPathRequestMatcher("/hello")).permitAll()
                .requestMatchers(new AntPathRequestMatcher("/country")).permitAll()
                .requestMatchers(new AntPathRequestMatcher("/authenticate")).authenticated()
                .anyRequest().authenticated()
            )
            .addFilterBefore(new JwtAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder encoder) {
        UserDetails user = User.withUsername("user")
                .password(encoder.encode("pwd"))
                .roles("USER")
                .build();
        return new InMemoryUserDetailsManager(user);
    }
}
