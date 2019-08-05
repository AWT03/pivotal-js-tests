pipeline {
  agent {
    docker {
      image 'chrome:latest'
    }

  }
  stages {
    stage('Generate Credentials') {
      environment {
        npm_config_cache = 'npm-cache'
      }
      steps {
        sh '''cd pivotal_tracker
echo \'{
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
  },
  "accounts": {
    "api": {
      "id": "1103374",
      "name": "AWT03_account"
    },
    "gui": {
      "id": "1105215",
      "name": "AWT03_GUI_account"
    }
  }
}\' > config.json'''
      }
    }
    stage('Build Gradle') {
      steps {
        sh './gradlew build'
      }
    }
    stage('Install NPM dependencies') {
      environment {
        npm_config_cache = 'npm-cache'
      }
      steps {
        sh './gradlew task npm_install'
      }
    }
    stage('Testing') {
      parallel {
        stage('API') {
          environment {
            npm_config_cache = 'npm-cache'
          }
          steps {
            sh './gradlew task npm_api'
          }
        }
        stage('GUI') {
          steps {
            sh './gradlew task npm_gui'
          }
        }
      }
    }
  }
}