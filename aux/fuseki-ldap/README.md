# fuseki-ldap

_it was useful to include the shiro src dir from github while figuring this out, extracted to dodge its .git dir_

### CustomLdapRealm.java Explanation

#### Operation Breakdown

1. **Class Definition**:

   - `CustomLdapRealm` extends `JndiLdapRealm` from Apache Shiro, which is used for LDAP-based authentication and authorization.

2. **Logger**:

   - A logger is defined for logging purposes.

3. **Configuration Properties**:

   - `groupSearchBase`: The base DN for searching groups.
   - `groupNameAttribute`: The attribute in the group entry that contains the group name.
   - `memberAttribute`: The attribute in the group entry that contains the member's DN.

4. **Authorization Info Query**:

   - `queryForAuthorizationInfo`: This method is overridden to query LDAP for the user's roles.
   - It retrieves the username from the `PrincipalCollection`.
   - It obtains an LDAP context from the `LdapContextFactory`.
   - It calls `getRoleNamesForUser` to get the roles for the user.
   - It returns a `SimpleAuthorizationInfo` object containing the roles.

5. **Role Names Retrieval**:

   - `getRoleNamesForUser`: This method searches LDAP for groups that the user belongs to.
   - It constructs a search filter using the `memberAttribute` and the user's DN.
   - It performs an LDAP search using the `groupSearchBase` and the search filter.
   - It iterates over the search results, extracting the group names from the `groupNameAttribute`.
   - It returns a set of role names.

6. **Setters**:
   - `setGroupSearchBase`, `setGroupNameAttribute`, and `setMemberAttribute` are setter methods for configuring the LDAP search parameters.

#### Example LDAP Entry

Here is an example of an LDAP entry that the code would work with:

##### User Entry

```
dn: uid=jdoe,ou=agents,dc=hyperdata,dc=it
uid: jdoe
cn: John Doe
sn: Doe
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: shadowAccount
userPassword: {SSHA}5e -- GENERATE USING slappasswd -- POmY/BfQ=
uidNumber: 1001
gidNumber: 1001
homeDirectory: /home/jdoe
loginShell: /bin/bash
```

##### Group Entry

```
dn: cn=admin,ou=groups,dc=hyperdata,dc=it
cn: admin
objectClass: groupOfNames
member: uid=jdoe,ou=agents,dc=hyperdata,dc=it
```

#### Detailed Steps with Example

1. **User Authentication**:

   - Assume `jdoe` is authenticated successfully.

2. **Authorization Info Query**:

   - `queryForAuthorizationInfo` is called with the `PrincipalCollection` containing `jdoe`.
   - The username `jdoe` is retrieved.
   - An LDAP context is obtained.

3. **Role Names Retrieval**:

   - `getRoleNamesForUser` is called with `jdoe` and the LDAP context.
   - The search filter is constructed: `(&(objectClass=groupOfNames)(member=uid=jdoe,ou=agents,dc=hyperdata,dc=it))`.
   - The LDAP search is performed using the `groupSearchBase` (e.g., `ou=groups,dc=hyperdata,dc=it`).
   - The search finds the group entry with `cn=admin`.
   - The group name `admin` is extracted from the `cn` attribute.
   - The role name `admin` is added to the set of role names.

4. **Return Authorization Info**:
   - A `SimpleAuthorizationInfo` object is created with the role names (`admin`).
   - The `SimpleAuthorizationInfo` object is returned.

#### Summary

The `CustomLdapRealm` class is designed to integrate with an LDAP server to retrieve user roles for authorization purposes. It searches for groups that the user belongs to and extracts the role names from those groups. The example LDAP entries provided show the structure of user and group entries that the code would work with.
