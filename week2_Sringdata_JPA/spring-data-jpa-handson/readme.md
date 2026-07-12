# Difference Between JPA, Hibernate and Spring Data JPA

| Feature | JPA | Hibernate | Spring Data JPA |
|----------|-----|-----------|-----------------|
| Type | Specification | Implementation of JPA | Abstraction built on JPA |
| Developed By | Oracle/Java Community | Hibernate Team | Spring Team |
| Purpose | Defines ORM standards | Implements ORM functionality | Simplifies JPA usage |
| Boilerplate Code | High | Moderate | Very Low |
| CRUD Operations | Manual | Manual | Automatic using Repository methods |
| Query Support | JPQL | HQL, JPQL, Native SQL | Derived queries, JPQL, Native SQL |
| Repository Support | No | No | Yes (`JpaRepository`) |

## Relationship

Spring Data JPA
↓
JPA
↓
Hibernate
↓
Database

## Example

### Using Hibernate

```java
Session session = sessionFactory.openSession();
Country country = session.get(Country.class, "IN");
```

### Using Spring Data JPA

```java
Country country = repository.findById("IN").orElse(null);
```

Spring Data JPA reduces boilerplate code and improves developer productivity.