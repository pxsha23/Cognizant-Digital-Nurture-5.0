# Week 4 - Account & Loan Microservices

Two independent Spring Boot Maven projects, per the mandatory hands-on
"Creating Microservices for account and loan":

## account/ (port 8080, default)
```
mvn spring-boot:run
curl http://localhost:8080/accounts/00987987973432
-> {"number":"00987987973432","type":"savings","balance":234343}
```

## loan/ (port 8081, set in application.properties)
```
mvn spring-boot:run
curl http://localhost:8081/loans/H00987987972342
-> {"number":"H00987987972342","type":"car","loan":400000,"emi":3258,"tenure":18}
```

Run both at the same time (two separate terminals/Run configs in IntelliJ) —
that's the point of the exercise: two independent services, no shared port.

## Note
The "Create Eureka Discovery Server and register microservices" part of this
skill row is marked "additional important" (bonus), not mandatory — skipped here
to prioritize your deadline. Say the word if you want that built too once the
mandatory list is locked in.
