pipeline {
  agent {
    docker {
      image 'gradle:latest'
    }

  }
  stages {
    stage('generate credential') {
	sh '''cd pivotal_tracker
	echo $'{
  		"base": "https://www.pivotaltracker.com/services/v5",
		  "main_url": "https://www.pivotaltracker.com/signin",
		  "headers": {
		    "X-TrackerToken": "82470bcea3c50c14f0acdd2a40ddc1a9",
		    "Content-Type": "application/json"
		  },
		  "prefix": "AWT03",
		  "user": {
		    "owner": {
		      "id": "",
		      "token": "82470bcea3c50c14f0acdd2a40ddc1a9",
		      "username": "awt03guitester",
		      "password": "AWT03guitester*"
		    }
		  }
		}' > config.json'''
    }
    stage('install npm dependencies') {
      environment {
        npm_config_cache = 'npm-cache'
      }
      steps {
        sh 'gradle task npm_install'
      }
    }
    stage('run tests'){
        sh 'gradle task npm_test'
    }
  }
}
