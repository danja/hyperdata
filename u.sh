#!/bin/bash
set -e
sudo apt update
sudo apt upgrade -y
sudo apt dist-upgrade
sudo snap refresh 
# sudo chmod +x /usr/local/bin/u
