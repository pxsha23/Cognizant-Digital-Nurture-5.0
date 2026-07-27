# Week 3 - spring-learn

Copy the entire `src` folder and `pom.xml` into your existing `spring-learn` IntelliJ
project (overwrite matching files — this includes the fixed SecurityConfig).

## What changed vs. before
- `SecurityConfig.java` now uses `AntPathRequestMatcher` explicitly instead of the
  bare-string `requestMatchers("/country")`, to rule out MVC-introspection matching
  as the cause of the `/country` 401 bug.
- `CountryController.getCountryIndia()` changed from `@RequestMapping("/country")`
  to `@GetMapping("/country")` — explicit method mapping, removes another variable.

## Test after restarting (full stop, not DevTools reload)
```
curl.exe -i http://localhost:8083/hello                     -> 200, "Hello World!!"
curl.exe -i http://localhost:8083/country                   -> 200, India JSON (should now work)
curl.exe -i http://localhost:8083/countries                 -> 401 (no token)
curl.exe -s -u user:pwd http://localhost:8083/authenticate   -> {"token":"..."}
curl.exe -i -H "Authorization: Bearer TOKEN" http://localhost:8083/countries   -> 200, all 4 countries
curl.exe -i -H "Authorization: Bearer garbage" http://localhost:8083/countries -> 401
```

If `/country` STILL returns 401 after this fix, that's no longer a config-matching
issue — it means something else is intercepting the request (e.g. an actuator
security default, or a second SecurityFilterChain bean somewhere). Screenshot the
IntelliJ Run console log at DEBUG level (`org.springframework.security=DEBUG` is
already set in application.properties) right when you make that request and share it.
