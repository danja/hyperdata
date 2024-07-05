ldapsearch -x -H ldap://hyperdata.it:389 -D "cn=admin,dc=hyperdata,dc=it" -w ADMIN_PASSWORD -b "dc=hyperdata,dc=it"

with data file next to it:

curl -v -u fuseki-foowiki-user:TheEnglish_3 -X POST -H "Content-Type: application/sparql-update" --data-binary @update.sparql https://fuseki.hyperdata.it/foowiki/update
