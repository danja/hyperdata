```sh
cd ~/hyperdata/transmissions # my local path
# ./del-dan.sh
./trans postcraft-statics ~/hyperdata/hyperdata/docs/postcraft
./trans md-to-sparqlstore ~/hyperdata/hyperdata/docs/postcraft
./trans sparqlstore-to-html ~/hyperdata/hyperdata/docs/postcraft
./trans sparqlstore-to-site-indexes ~/hyperdata/hyperdata/docs/postcraft
```