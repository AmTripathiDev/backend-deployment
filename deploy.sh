#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.12.0/bin

cd backend-deployment
git pull origin master
cd server
pm2 kill
pm2 start index.js

