pipeline {
  agent {
    docker {
      image 'gradle:latest'
    }

  }
  stages {
    stage('generate credential') {
	sh 'cd pivotal_tracker'
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
