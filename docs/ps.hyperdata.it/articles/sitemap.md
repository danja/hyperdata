- top level general notes : danny.ayers.name
- top level general notes : ps.hyperdata.it

Domains :

- danny.ayers.name - personal, main
- hyperdata.it - coding related
- strandz.it - bookmarker project
- elfquake.org - ELFQuake project

(all registered at gandi.net, elfquake at dynadot)

### danny.ayers.name

@ 86400 IN SOA ns1.gandi.net. hostmaster.gandi.net. 1711462868 10800 3600 604800 10800
@ 10800 IN A 178.79.189.240

postscript direct

- local : `/home/danny/github-danny/postcraft/danny.ayers.name/public/home`
- server : `/home/github/postcraft/danny.ayers.name/public/home`

└── www
├── danny.ayers.name -> ../github/postcraft/danny.ayers.name/public/home

- github :

### hyperdata.it

for now, as previous server

- local : `/home/danny/HKMS/hyperdata-static`
- server : `/home/github/hyperdata-static`
- github :

#### ps.hyperdata.it

postscript

- local : `/home/danny/github-danny/hyperdata/docs/ps.hyperdata.it/public/home`
- server : `/home/github/hyperdata/docs/ps.hyperdata.it/public/home`
- github :

#### foaf-retro.hyperdata.it

postscript

- local : `/home/danny/github-danny/foaf-retro/foaf-retro.hyperdata.it/public/home`
- server : `/home/github/foaf-retro/foaf-retro.hyperdata.it/public/home`
- github :

### elfquake.org

postscript direct

- local : `/home/danny/github-danny/elfquake/elfquake.org/public/home`
- server :
- github :

### strandz.it

is git submodule

for app

- local : `/home/danny/github-danny/hyperdata/packages/strandz`
- server :
- github :

#### ps.strandz.it

postscript

- local : `/home/danny/github-danny/strandz/docs/strandz.it/public/home`
- server : `/home/github/strandz/docs/strandz.it/public/home`

- github :

---

https://github.blog/open-source/git/working-with-submodules/

```
cd /home/danny/github-danny/hyperdata/packages
git submodule add https://github.com/danja/strandz.git strandz
```

```
git clone --recursive https://github.com/danja/strandz.git
```

```
root@hyperdata:/home# tree -L 2
.
├── danny
│   ├── nginx-sites-available
│   └── rsync-nginx.sh
├── fuseki
├── github
│   ├── cd
│   ├── elfquake
│   ├── environs
│   ├── farelo
│   ├── foolicious
│   ├── foowiki
│   ├── fuseki-ldap
│   ├── HKMS
│   ├── hyperdata
│   ├── hyperdata-static
│   ├── node-services
│   ├── postcraft
│   ├── schema-editor
│   ├── transmissions
│   ├── trellis
│   └── trev
├── hkms-apps -> ./github
├── services
│   ├── CommunitySolidServer
│   ├── fuseki
│   ├── ldap
│   ├── ldap-config
│   └── solid
└── www
    ├── danny.ayers.name -> ../github/postcraft/danny.ayers.name/public/home
    ├── elfquake.org -> /home/github/elfquake/elfquake.org/public/home
    ├── git
    ├── hyperdata.it -> /home/github/hyperdata-static
    └── strandz.it -> git/provolone-piccante/strandz.it

```

root@hyperdata:/home/github/hyperdata/docs/ps.hyperdata.it/public/home# cd /etc/nginx/sites-available/
root@hyperdata:/etc/nginx/sites-available# ls
danny.ayers.name.conf elfquake.org.conf fuseki.conf hyperdata.it.conf solid.conf strandz.it.conf
