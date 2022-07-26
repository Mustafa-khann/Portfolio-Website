#!/bin/bash

while :
do
time 30
git add .
git commit -m "update"
git push
done