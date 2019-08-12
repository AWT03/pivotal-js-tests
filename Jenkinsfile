pipeline {
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
          environment {
            npm_config_cache = 'npm-cache'
          }
          steps {
            sh './gradlew task npm_gui'
          }
        }
      }
    }
  }
}