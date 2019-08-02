pipeline {
  agent {
    docker {
      image 'gradle:latest'
    }

  }
  stages {
    stage('stage 1') {
      parallel {
        stage('stage 1') {
          environment {
            npm_config_cache = 'npm-cache'
          }
          steps {
            sh 'gradle build'
          }
        }
        stage('stage 1.2') {
          steps {
            sh 'ls -la'
          }
        }
      }
    }
    stage('stage 2') {
      environment {
        npm_config_cache = 'npm-cache'
      }
      steps {
        sh 'gradle task npm_install npm_test'
      }
    }
  }
}
