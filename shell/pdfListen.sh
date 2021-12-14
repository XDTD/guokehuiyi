
# 从数据库查询livego的链接
result=`psql "host=127.0.0.1 port=5432 user=canvas  password=19990923 dbname=canvas" << EOF
select url from url_to_livego order by course_id;
\q
EOF `

# path
guokehuiyiPath="/home/td/workspace/guokehuiyi"

# 提取sql中的url
tmpFile="${guokehuiyiPath}/test/temp.txt"
echo $result | grep -o "rtmp.*" | sed 's/ /\n/g ' >> $tmpFile
# 删除“n rows”这两行
sed -i '$d' $tmpFile
sed -i '$d' $tmpFile


# 提取url
sum=`sed -n '$=' $tmpFile` #计算文件的总行数
i=0
while read line
do
    urls[$i]="$line"
    i=`expr $i + 1`
done < $tmpFile

rm $tmpFile #删除文件

# debug
# for ((i=0; i<sum; i++)) ;do 
#     echo "${urls[$i]}"
# done


# 循环定时截图，30s截图一次
let temp=60*100
totalTime=${1:-$temp} #总共截图多少秒，可接受参数，默认参数100分钟
step=${2:-30}    #每隔多少秒截图一次截图,可接受参数，默认参数30s
let picNum=${totalTime}/${step}  #截图多少张
# echo $picNum
for ((i=0; i<picNum; i++));do 
    for((j=0; j<sum; j++));do 
        # -r 每秒截图n帧
        # -t 截图n秒
        # -ss n秒后开始截图
        dirName="${guokehuiyiPath}/test/out/room${j}"
        if [ ! -d $dirName ];then
            mkdir $dirName
        fi
        # 超过5s就退出
        ffmpeg  -rw_timeout 5000000  -i ${urls[$j]}   -f image2 -frames:v 1 ${dirName}/out${i}.jpg
    done
    sleep $step; 
done


# 开始转pdf
dirPath="${guokehuiyiPath}/test/out"
paths=$(ls $dirPath)
for path in $paths; do
    i=0
    files=$(ls "$dirPath/$path")

    # 将图片一个个转换为pdf
    for filename in $files; do
        convert $dirPath/$path/$filename "$dirPath/$path/out${i}.pdf"
        let i=i+1
        # rm $dirPath/$path/$filename
    done


    # 保存合并前的pdf路径
    files=$(ls "$dirPath/$path")
    curTime=$(date +"%Y-%m-%d %H:%M:%S" |  tr - _ | tr : _ | tr " " _)

    outPdf="$path$curTime"
    # 合并
    pdfunite $dirPath/$path/*.pdf "$dirPath/$path/record/$outPdf.pdf"
    # 合并之后删除之前的pdf
    for filename in $files; do
        rm $dirPath/$path/$filename
    done

    # 移动到输出的文件夹

done


# 合并pdf
