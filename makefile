# Backend
backend: 
	cd backend && docker build -t julio/backend .
	docker push julio/backend

# Operation service
operation_service:
	cd frontend && docker build -t julio/operation_service .
	docker push julio/operation_service

# Display service
display_service:
	cd frontend && docker build -t julio/display_service .
	docker push julio/display_service

# Clean 
clean:
	docker rmi julio/backend
	docker rmi julio/operation_service
	docker rmi julio/display_service