
echo Enter Tag here:

read tag

docker build --build-arg NODE_ENV=development . -t booking-microservice:$tag -f Dockerfile

docker tag booking-microservice:$tag 209703339956.dkr.ecr.ap-southeast-1.amazonaws.com/booking-microservice:$tag

docker push 209703339956.dkr.ecr.ap-southeast-1.amazonaws.com/booking-microservice:$tag