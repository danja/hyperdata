# hyperdata stack howto

install/run/troubleshooting

## tbox

http://localhost:4000/ echos request via nginx

http://localhost:4040/ gives status overview

http://localhost:4080/ suggests it's status - doesn't work...

http://localhost:4030/ is Fuseki admin

### ssh

Two users :

semem:semem
root:semem

```sh
ssh root@localhost -p 2222
```


### Troubleshooting


```sh
cd ~/hyperdata/tbox
docker-compose logs
...
tbox-fuseki-1 | [2025-02-12 10:46:46] TDB        WARN  Your platform does not support checking process liveness so TDB disk locations cannot be reliably locked to prevent possible corruption due to unsafe multi-JVM usage
```

I already had an instance of Fuseki running through `systemctl`. Needed :
```sh
sudo systemctl stop fuseki
sudo systemctl disable fuseki
sudo systemctl stop tbox
sudo systemctl start tbox
```
