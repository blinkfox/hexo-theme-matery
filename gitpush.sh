#!/bin/bash

git add . 
git commit  -s $1

git push origin  HEAD:refs/heads/hexo

