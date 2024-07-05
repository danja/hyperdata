package org.apache.jena.fuseki.authz;

import java.util.HashSet;
import java.util.Set;
import javax.naming.NamingEnumeration;
import javax.naming.NamingException;
import javax.naming.directory.Attribute;
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;
import javax.naming.ldap.LdapContext;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.ldap.JndiLdapRealm;
import org.apache.shiro.realm.ldap.LdapContextFactory;
import org.apache.shiro.realm.ldap.LdapUtils;
import org.apache.shiro.subject.PrincipalCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CustomLdapRealm extends JndiLdapRealm {

  private static final Logger log = LoggerFactory.getLogger(
    CustomLdapRealm.class
  );

  private String groupSearchBase;
  private String groupNameAttribute;
  private String memberAttribute;

  @Override
  protected AuthorizationInfo queryForAuthorizationInfo(
    PrincipalCollection principals,
    LdapContextFactory ldapContextFactory
  ) throws NamingException {
    String username = (String) getAvailablePrincipal(principals);

    LdapContext ldapContext = ldapContextFactory.getSystemLdapContext();
    Set<String> roleNames;

    try {
      roleNames = getRoleNamesForUser(username, ldapContext);
    } catch (NamingException e) {
      log.error(
        "LDAP naming error while attempting to retrieve authorization for user [{}]",
        username,
        e
      );
      throw e;
    } finally {
      LdapUtils.closeContext(ldapContext);
    }

    return new SimpleAuthorizationInfo(roleNames);
  }

  protected Set<String> getRoleNamesForUser(
    String username,
    LdapContext ldapContext
  ) throws NamingException {
    SearchControls searchCtls = new SearchControls();
    searchCtls.setSearchScope(SearchControls.SUBTREE_SCOPE);
    String searchFilter =
      "(&(objectClass=groupOfNames)(" +
      memberAttribute +
      "=uid=" +
      username +
      ",ou=agents,dc=hyperdata,dc=it))";

    log.debug("Searching for roles with filter: {}", searchFilter);
    log.debug("Using group search base: {}", groupSearchBase);

    NamingEnumeration<SearchResult> results;
    try {
      results = ldapContext.search(groupSearchBase, searchFilter, searchCtls);
    } catch (NamingException e) {
      log.error("LDAP search failed with filter: {}", searchFilter, e);
      throw e;
    }

    Set<String> roleNames = new HashSet<>();
    while (results.hasMore()) {
      SearchResult result = results.next();
      log.debug("Found group: {}", result.getNameInNamespace());
      Attribute groupNameAttr = result.getAttributes().get(groupNameAttribute);
      if (groupNameAttr != null) {
        NamingEnumeration<?> groupNames = groupNameAttr.getAll();
        while (groupNames.hasMore()) {
          String roleName = groupNames.next().toString();
          log.debug("Adding role: {}", roleName);
          roleNames.add(roleName);
        }
      }
    }
    return roleNames;
  }

  public void setGroupSearchBase(String groupSearchBase) {
    this.groupSearchBase = groupSearchBase;
  }

  public void setGroupNameAttribute(String groupNameAttribute) {
    this.groupNameAttribute = groupNameAttribute;
  }

  public void setMemberAttribute(String memberAttribute) {
    this.memberAttribute = memberAttribute;
  }
}
