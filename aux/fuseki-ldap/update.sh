git pull
cp /home/github/fuseki-ldap/custom-ldap-realm.jar /home/services/fuseki/extra/
rm /var/log/fuseki/*
systemctl restart fuseki
# head -n 20 /var/log/fuseki/fuseki-debug.log 
