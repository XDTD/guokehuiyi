#!/bin/bash

demoName='/home/td/workspace/apache-tomcat-8.5.73/webapps/course/demo.html'
courseName=${1}
fileName="/home/td/workspace/apache-tomcat-8.5.73/webapps/course/${courseName}.html"
# echo $fileName

if [ ! -f $fileName ];then
#   echo "文件不存在"
  cp $demoName $fileName
  defaultUrl='http:\/\/127.0.0.1:7001\/live\/movie.flv'
  newUrl="http:\/\/127.0.0.1:7001\/live\/${1}.flv"
  sedCmd="s/${defaultUrl}/${newUrl}/"
#   echo $sedCmd
  sed -i $sedCmd $fileName
fi

