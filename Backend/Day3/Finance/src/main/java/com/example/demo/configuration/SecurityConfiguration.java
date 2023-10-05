package com.example.demo.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.demo.API.API;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
	  private final JWTFilter jwtAuthenticationFilter;
      private final AuthenticationProvider authenticationProvider;
      @Autowired
      MvcRequestMatcher.Builder mvc;
      @Bean
      public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
              httpSecurity
                              .cors(corsConfirguarationSource -> corsConfirguarationSource.configurationSource(
                                              corsConfigurationSource()))
                              .csrf(csrf -> csrf.disable())
                              .authorizeHttpRequests(authorize -> authorize
                                              .requestMatchers(mvc.pattern(API.AUTH + "/**")).permitAll()
                                              .anyRequest().authenticated())
                              .sessionManagement(session -> session
                                              .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                              .authenticationProvider(authenticationProvider)
                              .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
              return httpSecurity.build();
      }

      @Bean
      public CorsConfigurationSource corsConfigurationSource() {
              CorsConfiguration configuration = new CorsConfiguration();
              configuration.setAllowedHeaders(API.HEADERS);
              configuration.setAllowCredentials(true);
              configuration.setAllowedMethods(API.METHODS);
              configuration.setAllowedOrigins(API.ORIGINS);
              UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
              source.registerCorsConfiguration("/**", configuration);
              return source;
      }

}
