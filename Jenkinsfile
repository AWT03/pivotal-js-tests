pipeline {
  agent {
    docker {
      image 'lgvaldez/ubuntu_chrome:1.0'
    }
  }
  stages {
    stage('Generate Credentials') {
      environment {
        npm_config_cache = 'npm-cache'
      }
      steps {
        withCredentials([file(credentialsId: 'pivotal_config', variable: 'config')]) {
          sh "cp \$config pivotal_tracker/config.json"
        }
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