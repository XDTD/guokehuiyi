# 确保环境生成
sudo service postgresql start
sudo service docker start
sudo docker run -p 1935:1935 -p 7001:7001 -p 7002:7002 -p 8091:8090 -d gwuhaolin/livego
# 保证数据库存在
sudo -u postgres createdb -O canvas canvas

psql "host=127.0.0.1 port=5432 user=canvas  password=19990923 dbname=canvas" << EOF


create table url_to_livego(
  course_id integer not null PRIMARY KEY,
  url character varying(50) NOT NULL
);
INSERT INTO url_to_livego VALUES (-1,'rtmp://127.0.0.1:1935/live/course0');
\q
EOF

# path
guokehuiyiPath="/home/td/workspace/guokehuiyi"



# 推流
url='rtmp://127.0.0.1:1935/live'
video="${guokehuiyiPath}/test/test.mp4"
streamName=`curl  http://localhost:8091/control/get?room=course0 |  sed 's/,/\n/g' | grep 'data' | sed 's/:/\n/g' | sed '1d' | sed 's/}//g' | sed 's/\"//g'`
echo $streamName
nohup ffmpeg -i ${video} -ar 44100 -vcodec libx264 -acodec aac -f flv ${url}/${streamName} > ${guokehuiyiPath}/test/ffmpeg.log 2>&1  &
sleep 5


# # 测试
# # 先将之前测试生成的文件删掉
rm  ${guokehuiyiPath}/test/out/course0/*.pdf
bash ${guokehuiyiPath}/shell/pdfListen.sh 10 2 #执行10s,每2s截图一次
sleep 5
# #检测pdf是否生成
temp=$(ls ${guokehuiyiPath}/test/out/course0/record)
fileName="${guokehuiyiPath}/test/out/course0/record/$temp"
if [ -f $fileName ];then
    echo "verify 1 completed,pdf has been generated"
    pages=$(pdfinfo -rawdates $fileName | grep Pages  | tr -cd "[0-9]")
    if  [ $pages -eq 5 ];then
        echo "verify 2 completed,the pages of pdf is correct"
    else
        echo "verify 2 failed,the pages of pdf isn't correct"
    fi
else
    echo "verify 1 failed, pdf hasn't been generated"
fi
# 删除生成的pdf
# rm $fileName
killall ffmpeg

# 验证canvas
# fileNames=`find ${guokehuiyiPath}/canvas/spec   -name *.rb`
# for fileName in $fileNames; do
#     cd ${guokehuiyiPath}/canvas/
#     bundle exec rspec "$fileName" >> ~/testlog
# done