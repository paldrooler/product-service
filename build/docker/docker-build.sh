set -ex

#SET the variables
USERNAME=paldrooler
IMAGE=product-service

docker build --file Dockerfile -t $USERNAME/$IMAGE:latest ../..