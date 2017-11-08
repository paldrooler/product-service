set -ex

#SET the variables
USERNAME=paldrooler
IMAGE=product-service

docker build -t $USERNAME/$IMAGE:latest ../..