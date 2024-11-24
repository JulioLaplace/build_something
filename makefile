# Variables
DOCKER_USER=julio
BACKEND_IMAGE=$(DOCKER_USER)/backend
OPERATION_SERVICE_IMAGE=$(DOCKER_USER)/operation_service
DISPLAY_SERVICE_IMAGE=$(DOCKER_USER)/display_service

# Backend
backend:
	cd backend && docker build -t $(BACKEND_IMAGE) .
	docker push $(BACKEND_IMAGE)

# Operation service
operation_service:
	cd operation_service && docker build -t $(OPERATION_SERVICE_IMAGE) .
	docker push $(OPERATION_SERVICE_IMAGE)

# Display service
display_service:
	cd display_service && docker build -t $(DISPLAY_SERVICE_IMAGE) .
	docker push $(DISPLAY_SERVICE_IMAGE)

# Clean
clean:
	-docker rmi $(BACKEND_IMAGE)
	-docker rmi $(OPERATION_SERVICE_IMAGE)
	-docker rmi $(DISPLAY_SERVICE_IMAGE)