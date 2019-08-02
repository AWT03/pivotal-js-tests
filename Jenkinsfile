pipeline {
  agent {
    docker {
      image 'gradle:latest'
    }

  }
  stages {
    stage('generate credentials') {
      environment {
        npm_config_cache = 'npm-cache'
      }
      steps {
        sh '''cd pivotal_tracker
echo $\'{
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
}\' > config.json'''
      }
    }
    stage('build gradle') {
      steps {
        sh 'gradle build'
      }
    }
    stage('install dependencies and run tests') {
      environment {
        npm_config_cache = 'npm-cache'
      }
      steps {
        sh 'gradle task npm_install npm_test'
      }
    }
  }
}