#!/bin/bash

demoName='/home/td/workspace/guokehuiyi/test/livego/demo.html'
courseName=${1}
fileName="/home/td/workspace/guokehuiyi/test/livego/${courseName}.html"
# echo $fileName

if [ ! -f $fileName ];then
#   echo "文件不存在"
  cp $demoName $fileName
  curlIp=$(curl ifconfig.me)
  defaulPPTtUrl="http:\/\/${curlIp}:7001\/live\/movie_PPT.flv"
  newPPTUrl="http:\/\/${curlIp}:7001\/live\/${1}_PPT.flv"
  defaulBlackboardUrl="http:\/\/${curlIp}:7001\/live\/movie_Blackboard.flv"
  newBlackBoardUrl="http:\/\/${curlIp}:7001\/live\/${1}_Blackboard.flv"
  sedCmd="s/${defaulPPTtUrl}/${newPPTUrl}/"
  sedCmd="s/${defaulBlackboardUrl}/${newBlackBoardUrl}/"
#   echo $sedCmd
  sed -i $sedCmd $fileName
fi

