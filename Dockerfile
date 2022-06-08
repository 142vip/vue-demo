# 设置基础镜像
FROM nginx:latest
# 标签
LABEL version="Beta1.0"
LABEL description="vue模板项目"
# 作者
LABEL author="【Github&公众号】：Rong姐姐好可爱"
LABEL email="fairy@2925.com"
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /usr/share/nginx/html/
# 用本地的 default.conf 配置来替换nginx镜像里的默认配置
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

