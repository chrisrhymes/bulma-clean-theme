#!/bin/sh

# test.sh <env ip address> <branch>

cd ~/work/onicjapan.github.io
git pull
git checkout $2
bundle exec jekyll serve -H $1 -P $2
