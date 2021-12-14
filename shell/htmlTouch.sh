#!/bin/bash

demoName='/home/td/workspace/guokehuiyi/test/livego/demo.html'
courseName=${1}
fileName="/home/td/workspace/guokehuiyi/test/livego/${courseName}.html"
# echo $fileName

if [ ! -f $fileName ];then
#   echo "文件不存在"
  cp $demoName $fileName
  curlIp=$(curl ifconfig.me)
  defaulPPTtUrl="http:\/\/127.0.0.1:7001\/live\/movie_PPT.flv"
  echo $defaulPPTtUrl
  newPPTUrl="http:\/\/${curlIp}:7001\/live\/${1}_PPT.flv"
  defaulBlackboardUrl="http:\/\/127.0.0.1:7001\/live\/movie_Blackboard.flv"
  newBlackBoardUrl="http:\/\/${curlIp}:7001\/live\/${1}_Blackboard.flv"
  sedCmd1="s/${defaulPPTtUrl}/${newPPTUrl}/"
  sedCmd2="s/${defaulBlackboardUrl}/${newBlackBoardUrl}/"
#   echo $sedCmd
  sed -i $sedCmd1 $fileName
  sed -i $sedCmd2 $fileName
fi

