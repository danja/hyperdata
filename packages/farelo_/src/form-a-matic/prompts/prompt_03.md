please write a splitURI(uri) method that will look for the last bit of the URI to do this :

splitURI('http://usefulinc.com/ns/doap#Project')

returns :

{ namespace : 'http://usefulinc.com/ns/doap#', term : 'Project'}

splitURI('http://xmlns.com/foaf/0.1/name')

returns :

{ namespace : 'http://xmlns.com/foaf/0.1/', term : 'name' }
