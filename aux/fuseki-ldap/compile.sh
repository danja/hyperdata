javac -cp lib/shiro-core-2.0.1.jar:lib/fuseki-server.jar org/apache/jena/fuseki/authz/CustomLdapRealm.java
   jar cvf custom-ldap-realm.jar org/apache/jena/fuseki/authz/CustomLdapRealm.class